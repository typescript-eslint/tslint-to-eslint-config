import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "./adapters/logger";
import { ResultStatus,ResultWithStatus } from "./types";

export const logErrorResult = (result: ResultWithStatus, logger: Logger) => {
    switch (result.status) {
        case ResultStatus.ConfigurationError:
            logger.stderr.write(chalk.redBright("❌ "));
            logger.stderr.write(chalk.red("Could not start tslint-to-eslint:"));
            logger.stderr.write(chalk.redBright(` ❌${EOL}`));
            for (const complaint of result.complaints) {
                logger.stderr.write(chalk.yellowBright(`  ${complaint}${EOL}`));
            }
            break;

        case ResultStatus.Failed:
            logger.stderr.write(chalk.redBright("❌ "));
            logger.stderr.write(chalk.red(`${result.errors.length} error`));
            logger.stderr.write(chalk.red(result.errors.length === 1 ? "" : "s"));
            logger.stderr.write(chalk.red(" running tslint-to-eslint:"));
            logger.stderr.write(chalk.redBright(` ❌${EOL}`));
            for (const error of result.errors) {
                logger.stderr.write(chalk.gray(`  ${error.stack}${EOL}`));
            }
            break;
    }
};

export const logSuccessfulConversions = (
    conversionTypeName: string,
    action: string,
    quantity: number,
    logger: Logger,
) => {
    logger.stdout.write(chalk.greenBright(`${EOL}✨ ${quantity}`));
    logger.stdout.write(
        quantity === 1
            ? chalk.green(` ${conversionTypeName} ${action} with its ESLint equivalent.`)
            : chalk.green(` ${conversionTypeName}s ${action} with their ESLint equivalents.`),
    );
    logger.stdout.write(chalk.greenBright(` ✨${EOL}`));
};

export const logFailedConversions = (failed: string[], logger: Logger) => {
    logger.stderr.write(`${chalk.redBright(`${EOL}❌ ${failed.length}`)}`);
    logger.stderr.write(chalk.red(` error${failed.length === 1 ? "" : "s"}`));
    logger.stderr.write(chalk.red(" thrown."));
    logger.stderr.write(chalk.redBright(` ❌${EOL}`));
    logger.info.write(failed.join("\n\n") + "\n\n");
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
