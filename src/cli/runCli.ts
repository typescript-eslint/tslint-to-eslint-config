import chalk from "chalk";
import { Command } from "commander";
import { EOL } from "os";

import { version } from "../../package.json";
import { Logger } from "../adapters/logger";
import { SansDependencies } from "../binding";
import { convertConfig } from "../conversion/convertConfig";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../types";

export type RunCliDependencies = {
    convertConfigs: SansDependencies<typeof convertConfig>[];
    logger: Logger;
};

export const runCli = async (
    dependencies: RunCliDependencies,
    rawArgv: string[],
): Promise<ResultStatus> => {
    const command = new Command()
        .usage("[options] <file ...> --language [language]")
        .option(
            "--comments [files]",
            "convert tslint:disable rule flags in globbed files (experimental)",
        )
        .option("--config [config]", "eslint configuration file to output to")
        .option("--editor [editor]", "editor configuration file to convert")
        .option("--eslint [eslint]", "eslint configuration file to convert using")
        .option("--package [package]", "package configuration file to convert using")
        .option("--tslint [tslint]", "tslint configuration file to convert using")
        .option("--typescript [typescript]", "typescript configuration file to convert using")
        .option("-V --version", "output the package version");

    const parsedArgv = {
        config: "./.eslintrc.js",
        ...(command.parse(rawArgv) as Partial<TSLintToESLintSettings>),
    };

    if ({}.hasOwnProperty.call(parsedArgv, "version")) {
        dependencies.logger.stdout.write(`${version}${EOL}`);
        return ResultStatus.Succeeded;
    }

    for (const convertConfig of dependencies.convertConfigs) {
        const result = await tryConvertConfig(convertConfig, parsedArgv);
        if (result.status !== ResultStatus.Succeeded) {
            logErrorResult(result, dependencies);
            return result.status;
        }
    }

    dependencies.logger.stdout.write(chalk.greenBright(`${EOL}✅ All is well! ✅\n`));
    return ResultStatus.Succeeded;
};

const tryConvertConfig = async (
    config: SansDependencies<typeof convertConfig>,
    argv: Partial<TSLintToESLintSettings>,
): Promise<ResultWithStatus> => {
    let result: ResultWithStatus;

    try {
        result = await config(argv as TSLintToESLintSettings);
    } catch (error) {
        result = {
            errors: [error as Error],
            status: ResultStatus.Failed,
        };
    }

    return result;
};

const logErrorResult = (result: ResultWithStatus, dependencies: RunCliDependencies) => {
    switch (result.status) {
        case ResultStatus.ConfigurationError:
            dependencies.logger.stderr.write(chalk.redBright("❌ "));
            dependencies.logger.stderr.write(chalk.red("Could not start tslint-to-eslint:"));
            dependencies.logger.stderr.write(chalk.redBright(` ❌${EOL}`));
            for (const complaint of result.complaints) {
                dependencies.logger.stderr.write(chalk.yellowBright(`  ${complaint}${EOL}`));
            }
            break;

        case ResultStatus.Failed:
            dependencies.logger.stderr.write(chalk.redBright("❌ "));
            dependencies.logger.stderr.write(chalk.red(`${result.errors.length} error`));
            dependencies.logger.stderr.write(chalk.red(result.errors.length === 1 ? "" : "s"));
            dependencies.logger.stderr.write(chalk.red(" running tslint-to-eslint:"));
            dependencies.logger.stderr.write(chalk.redBright(` ❌${EOL}`));
            for (const error of result.errors) {
                dependencies.logger.stderr.write(chalk.gray(`  ${error.stack}${EOL}`));
            }
            break;
    }
};
