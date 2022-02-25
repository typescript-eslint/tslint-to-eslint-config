import chalk from "chalk";
import { Command } from "commander";
import { promises as fs } from "fs";
import { EOL } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { Logger } from "../adapters/logger";
import { SansDependencies } from "../binding";
import { Converter } from "../converters/types";
import {
    AllOriginalConfigurations,
    findOriginalConfigurations,
} from "../input/findOriginalConfigurations";
import { logErrorResult } from "../reporting";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../types";

export type RunCliDependencies = {
    converters: Converter[];
    findOriginalConfigurations: SansDependencies<typeof findOriginalConfigurations>;
    logger: Logger;
};

/**
 * @see `/docs/Architecture/README.md` for documentation.
 */
export const runCli = async (
    dependencies: RunCliDependencies,
    rawArgv: string[],
): Promise<ResultStatus> => {
    // 1. CLI options are parsed from the raw arguments into a commands object.
    const command = new Command()
        .storeOptionsAsProperties(false)
        .usage("[options] <file ...> --language [language]")
        .option("--comments [files]", "convert tslint:disable rule flags in files (experimental)")
        .option("--config [config]", "eslint configuration file to output to")
        .option("--editor [editor]", "editor configuration file to convert")
        .option("--eslint [eslint]", "eslint configuration file to convert using")
        .option("--package [package]", "package configuration file to convert using")
        .option("--prettier [prettier]", "add eslint-config-prettier to the plugins list")
        .option("--tslint [tslint]", "tslint configuration file to convert using")
        .option("--typescript [typescript]", "typescript configuration file to convert using")
        .option("-V, --version", "output the package version");

    const parsedArgv = {
        config: "./.eslintrc.js",
        // eslint-disable-next-line -- this gets deduced as the same type, for some erroneous reason
        ...(command.parse(rawArgv).opts() as Partial<TSLintToESLintSettings>),
    } as TSLintToESLintSettings;

    // 2. If the version should be printed, we do that and stop execution.
    if (command.opts().version) {
        const { version } = JSON.parse(
            (await fs.readFile(path.join(__dirname, "../../package.json"))).toString(),
        );
        dependencies.logger.stdout.write(`${version}${EOL}`);
        return ResultStatus.Succeeded;
    }

    // 3. Any existing linter and TypeScript configurations are read from disk.
    const originalConfigurations = await dependencies.findOriginalConfigurations(parsedArgv);
    if (originalConfigurations.status !== ResultStatus.Succeeded) {
        logErrorResult(originalConfigurations, dependencies.logger);
        return originalConfigurations.status;
    }

    // 4. Each converter is run, halting execution if it fails.
    for (const converter of dependencies.converters) {
        const result = await tryConvertConfig(converter, parsedArgv, originalConfigurations.data);
        if (result.status !== ResultStatus.Succeeded) {
            logErrorResult(result, dependencies.logger);
            return result.status;
        }
    }

    dependencies.logger.stdout.write(chalk.greenBright(`${EOL}✅ All is well! ✅\n`));
    return ResultStatus.Succeeded;
};

const tryConvertConfig = async (
    converter: Converter,
    argv: TSLintToESLintSettings,
    originalConfigurations: AllOriginalConfigurations,
): Promise<ResultWithStatus> => {
    const ruleEquivalents = new Map<string, string[]>();
    let result: ResultWithStatus;

    try {
        result = await converter(argv, originalConfigurations, ruleEquivalents);
    } catch (error) {
        result = {
            errors: [error as Error],
            status: ResultStatus.Failed,
        };
    }

    return result;
};
