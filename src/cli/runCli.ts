import chalk from "chalk";
import { EOL } from "os";
import { Command } from "commander";

import { version } from "../../package.json";
import { Logger } from "../adapters/logger";
import { SansDependencies } from "../binding";
import { convertConfig } from "../conversion/convertConfig";
import { TSLintToESLintSettings, TSLintToESLintResult, ResultStatus } from "../types";

export type RunCliDependencies = {
    convertConfig: SansDependencies<typeof convertConfig>;
    logger: Logger;
};

export const runCli = async (
    dependencies: RunCliDependencies,
    rawArgv: string[],
): Promise<ResultStatus> => {
    const command = new Command()
        .usage("[options] <file ...> --language [language]")
        .option("-c, --config [config]", "tslint configuration file to convert")
        .option("-V --version", "output the package version");

    const parsedArgv = command.parse(rawArgv) as Partial<TSLintToESLintSettings>;

    if ({}.hasOwnProperty.call(parsedArgv, "version")) {
        dependencies.logger.stdout.write(`${version}${EOL}`);
        return ResultStatus.Succeeded;
    }

    let result: TSLintToESLintResult;

    try {
        result = await dependencies.convertConfig(parsedArgv);
    } catch (error) {
        result = {
            error: error as Error,
            status: ResultStatus.Failed,
        };
    }

    switch (result.status) {
        case ResultStatus.Succeeded:
            dependencies.logger.stdout.write(chalk.greenBright("✅ All is well! ✅\n"));
            break;

        case ResultStatus.ConfigurationError:
            dependencies.logger.stderr.write(chalk.redBright("❌ "));
            dependencies.logger.stderr.write(chalk.yellow("Could not start tslint-to-eslint: "));
            dependencies.logger.stderr.write(chalk.yellowBright(result.complaint));
            dependencies.logger.stderr.write(chalk.redBright(` ❌${EOL}`));
            break;

        case ResultStatus.Failed:
            dependencies.logger.stderr.write(chalk.redBright("❌ "));
            dependencies.logger.stderr.write(chalk.yellow("Error running tslint-to-eslint:"));
            dependencies.logger.stderr.write(chalk.redBright(` ❌${EOL}`));
            dependencies.logger.stderr.write(chalk.yellowBright(`${result.error.stack}${EOL}`));
            break;
    }

    return result.status;
};
