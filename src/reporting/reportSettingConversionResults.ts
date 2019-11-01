import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../adapters/logger";
import { ErrorSummary } from "../errors/errorSummary";
import { SettingConversionResults } from "../settings/convertSettings";
import { EditorSetting } from "../settings/types";
import { ReportConversionResultsDependencies } from "./dependencies";

export const reportSettingConversionResults = (
    dependencies: ReportConversionResultsDependencies,
    settingConversionResults: SettingConversionResults,
) => {
    if (settingConversionResults.converted.size !== 0) {
        logSuccessfulConversions(settingConversionResults.converted, dependencies.logger);
    }

    if (settingConversionResults.failed.length !== 0) {
        logFailedConversions(settingConversionResults.failed, dependencies.logger);
    }

    if (settingConversionResults.missing.length !== 0) {
        logMissingSettings(settingConversionResults.missing, dependencies.logger);
    }
};

const logSuccessfulConversions = (converted: Map<string, EditorSetting>, logger: Logger) => {
    logger.stdout.write(chalk.greenBright(`✨ ${converted.size}`));
    logger.stdout.write(
        converted.size === 1
            ? chalk.green(" setting replaced with its ESLint equivalent.")
            : chalk.green(" settings replaced with their ESLint equivalents."),
    );
    logger.stdout.write(chalk.greenBright(` ✨${EOL}`));
};

const logFailedConversions = (failed: ErrorSummary[], logger: Logger) => {
    logger.stderr.write(`${chalk.redBright(`💀 ${failed.length}`)}`);
    logger.stderr.write(chalk.red(` error${failed.length === 1 ? "" : "s"}`));
    logger.stderr.write(chalk.red(" thrown."));
    logger.stderr.write(chalk.redBright(` 💀${EOL}`));

    logger.info.write(failed.map(failed => failed.getSummary()).join(""));

    logger.stderr.write(chalk.gray(`Check ${logger.debugFileName} for details.${EOL}`));
};

const logMissingSettings = (missing: EditorSetting[], logger: Logger) => {
    logger.stdout.write(chalk.yellowBright(`️👀 ${missing.length}`));
    logger.stdout.write(
        chalk.yellow(
            missing.length === 1
                ? " setting does not yet have an ESLint equivalent"
                : " settings do not yet have ESLint equivalents",
        ),
    );
    logger.stdout.write(chalk.yellowBright(` 👀${EOL}`));

    logger.info.write(
        missing
            .map(
                ({ settingName }) => `${settingName} does not yet have an ESLint equivalent.${EOL}`,
            )
            .join(""),
    );
};
