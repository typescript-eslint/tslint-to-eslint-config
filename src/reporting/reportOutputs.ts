import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../adapters/logger";
import { EditorSetting } from "../editorSettings/types";
import { ErrorSummary } from "../errors/errorSummary";
import { ESLintRuleOptions } from "../rules/types";

export type EditorSettingEntry = Pick<EditorSetting, "editorSettingName">;

export const logSuccessfulConversions = (
    conversionTypeName: string,
    converted: Map<string, EditorSetting | ESLintRuleOptions>,
    logger: Logger,
) => {
    logger.stdout.write(chalk.greenBright(`${EOL}✨ ${converted.size}`));
    logger.stdout.write(
        converted.size === 1
            ? chalk.green(` ${conversionTypeName} replaced with its ESLint equivalent.`)
            : chalk.green(` ${conversionTypeName}s replaced with their ESLint equivalents.`),
    );
    logger.stdout.write(chalk.greenBright(` ✨${EOL}`));
};

export const logFailedConversions = (failed: ErrorSummary[], logger: Logger) => {
    logger.stderr.write(`${chalk.redBright(`${EOL}❌ ${failed.length}`)}`);
    logger.stderr.write(chalk.red(` error${failed.length === 1 ? "" : "s"}`));
    logger.stderr.write(chalk.red(" thrown."));
    logger.stderr.write(chalk.redBright(` ❌${EOL}`));
    logger.info.write(failed.map((fail) => fail.getSummary()).join("\n\n") + "\n\n");
    logger.stderr.write(chalk.red(`  Check ${logger.debugFileName} for details.${EOL}`));
};

export const logMissingConversionTarget = <T>(
    conversionTypeName: string,
    missingOutputMapping: (missing: T) => string,
    missing: T[],
    logger: Logger,
    additionalWarnings: string[] = [],
) => {
    const headline =
        missing.length === 1
            ? ` ${conversionTypeName} is not known by tslint-to-eslint-config to have an ESLint equivalent`
            : ` ${conversionTypeName}s are not known by tslint-to-eslint-config to have ESLint equivalents`;

    logger.stdout.write(chalk.yellowBright(`️${EOL}❓ ${missing.length}`));
    logger.stdout.write(chalk.yellow(`${headline}.`));
    logger.stdout.write(chalk.yellowBright(` ❓${EOL}`));

    for (const warning of additionalWarnings) {
        logger.stdout.write(chalk.yellow(`  ${warning}${EOL}`));
    }

    logger.stdout.write(chalk.yellow(`  Check ${logger.debugFileName} for details.${EOL}`));

    logger.info.write(`${missing.length}${headline}:${EOL}`);
    logger.info.write(
        missing
            .map(
                (conversion) =>
                    `  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "${missingOutputMapping(
                        conversion,
                    )}".${EOL}`,
            )
            .join(""),
    );
    logger.info.write(EOL);
};
