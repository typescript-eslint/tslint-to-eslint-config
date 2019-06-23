import chalk from "chalk";
import { EOL } from "os";
import { Command } from "commander";

import { version } from "../../package.json";
import { ProcessLogger } from "../logger";
import { TSLintToESLintSettings, TSLintToESLintResult, ResultStatus } from "../types";

export type CliRuntime = {
    convertConfig: RuntimeConvertConfig;
    logger: ProcessLogger;
};

export type RuntimeConvertConfig = (
    settings: TSLintToESLintSettings,
) => Promise<TSLintToESLintResult>;

export const runCli = async (rawArgv: string[], runtime: CliRuntime): Promise<ResultStatus> => {
    const command = new Command()
        .usage("[options] <file ...> --language [language]")
        .option("-c, --config [config]", "tslint configuration file to convert")
        .option("-V --version", "output the package version");

    const parsedArgv = command.parse(rawArgv) as Partial<TSLintToESLintSettings>;

    if ({}.hasOwnProperty.call(parsedArgv, "version")) {
        runtime.logger.stdout.write(`${version}${EOL}`);
        return ResultStatus.Succeeded;
    }

    let result: TSLintToESLintResult;

    try {
        result = await runtime.convertConfig(parsedArgv);
    } catch (error) {
        result = {
            error: error as Error,
            status: ResultStatus.Failed,
        };
    }

    switch (result.status) {
        case ResultStatus.Succeeded:
            runtime.logger.stdout.write(chalk.greenBright("✅ All is well! ✅"));
            break;

        case ResultStatus.ConfigurationError:
            runtime.logger.stderr.write(chalk.redBright("❌ "));
            runtime.logger.stderr.write(chalk.yellow("Could not start tslint-to-eslint: "));
            runtime.logger.stderr.write(chalk.yellowBright(result.complaint));
            runtime.logger.stderr.write(chalk.redBright(` ❌${EOL}`));
            break;

        case ResultStatus.Failed:
            runtime.logger.stderr.write(chalk.redBright("❌ "));
            runtime.logger.stderr.write(chalk.yellow("Error running tslint-to-eslint:"));
            runtime.logger.stderr.write(chalk.redBright(` ❌${EOL}`));
            runtime.logger.stderr.write(chalk.yellowBright(`${result.error.stack}${EOL}`));
            break;
    }

    return result.status;
};
