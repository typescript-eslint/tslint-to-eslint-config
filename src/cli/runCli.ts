import chalk from "chalk";
import { Command } from "commander";
import { EOL } from "os";

import { version } from "../../package.json";
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

export const runCli = async (
    dependencies: RunCliDependencies,
    rawArgv: string[],
): Promise<ResultStatus> => {
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
        ...command.parse(rawArgv).opts(),
    } as TSLintToESLintSettings;

    if (command.opts().version) {
        dependencies.logger.stdout.write(`${version}${EOL}`);
        return ResultStatus.Succeeded;
    }

    const originalConfigurations = await dependencies.findOriginalConfigurations(parsedArgv);
    if (originalConfigurations.status !== ResultStatus.Succeeded) {
        logErrorResult(originalConfigurations, dependencies.logger);
        return originalConfigurations.status;
    }

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
    let result: ResultWithStatus;

    try {
        result = await converter(argv, originalConfigurations);
    } catch (error) {
        result = {
            errors: [error as Error],
            status: ResultStatus.Failed,
        };
    }

    return result;
};
