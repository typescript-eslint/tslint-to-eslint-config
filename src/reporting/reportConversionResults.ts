import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../adapters/logger";
import { ConversionError } from "../rules/conversionError";
import { RuleConversionResults } from "../rules/convertRules";
import { TSLintRuleOptions, ESLintRuleOptions } from "../rules/types";

export type ReportConversionResultsDependencies = {
    logger: Logger;
};

export const reportConversionResults = (
    dependencies: ReportConversionResultsDependencies,
    ruleConversionResults: RuleConversionResults,
) => {
    if (ruleConversionResults.converted.size !== 0) {
        logSuccessfulConversions(ruleConversionResults.converted, dependencies.logger);
        logNotices(ruleConversionResults.converted, dependencies.logger);
    }

    if (ruleConversionResults.failed.length !== 0) {
        logFailedConversions(ruleConversionResults.failed, dependencies.logger);
    }

    if (ruleConversionResults.missing.length !== 0) {
        logMissingRules(ruleConversionResults.missing, dependencies.logger);
    }

    if (ruleConversionResults.packages.size !== 0) {
        logMissingPackages(ruleConversionResults.packages, dependencies.logger);
    }
};

const logSuccessfulConversions = (converted: Map<string, ESLintRuleOptions>, logger: Logger) => {
    logger.stdout.write(chalk.greenBright(`✨ ${converted.size}`));
    logger.stdout.write(
        converted.size === 1
            ? chalk.green(" rule replaced with its ESLint equivalent.")
            : chalk.green(" rules replaced with their ESLint equivalents."),
    );
    logger.stdout.write(chalk.greenBright(` ✨${EOL}`));
};

const logFailedConversions = (failed: ConversionError[], logger: Logger) => {
    logger.stderr.write(`${chalk.redBright(`💀 ${failed.length}`)}`);
    logger.stderr.write(
        chalk.red(` rule${failed.length === 1 ? " threw an error" : "s threw errors"}`),
    );
    logger.stderr.write(chalk.red("; using eslint-plugin-tslint instead."));
    logger.stderr.write(chalk.redBright(` 💀${EOL}`));

    logger.info.write(
        failed
            .map(
                failed =>
                    `${failed.tslintRule.ruleName} threw an error during conversion: ${failed.error.stack}.${EOL}`,
            )
            .join(""),
    );

    logger.stderr.write(chalk.gray(`Check ${logger.debugFileName} for details.${EOL}`));
};

const logMissingRules = (missing: TSLintRuleOptions[], logger: Logger) => {
    logger.stdout.write(chalk.yellowBright(`️👀 ${missing.length}`));
    logger.stdout.write(
        chalk.yellow(
            missing.length === 1
                ? " rule does not yet have an ESLint equivalent"
                : " rules do not yet have ESLint equivalents",
        ),
    );
    logger.stdout.write(chalk.yellow("; defaulting to eslint-plugin-tslint."));
    logger.stdout.write(chalk.yellowBright(` 👀${EOL}`));

    logger.info.write(
        missing
            .map(({ ruleName }) => `${ruleName} does not yet have an ESLint equivalent.${EOL}`)
            .join(""),
    );
};

const logMissingPackages = (packages: Set<string>, logger: Logger) => {
    logger.stdout.write(chalk.cyanBright(`⚡ ${packages.size}`));
    logger.stdout.write(chalk.cyan(" package"));
    logger.stdout.write(chalk.cyan(packages.size === 1 ? " is" : "s are"));
    logger.stdout.write(chalk.cyan(` required for new ESLint rules.`));
    logger.stdout.write(chalk.cyanBright(` ⚡${EOL}`));

    logger.stdout.write(
        Array.from(packages)
            .map(packageName => `\t${chalk.cyanBright(packageName)}${EOL}`)
            .join(""),
    );
};

const logNotices = (converted: Map<string, ESLintRuleOptions>, logger: Logger) => {
    const rulesWithNotices = [...converted.values()].filter(
        ruleOptions => ruleOptions.notices && ruleOptions.notices.length >= 1,
    ) as ESLintRuleOptions[];

    if (rulesWithNotices.length > 0) {
        logger.stdout.write(chalk.yellowBright(`📢 ${rulesWithNotices.length} ESLint`));
        logger.stdout.write(
            chalk.yellowBright(rulesWithNotices.length == 1 ? ` rule behaves` : ` rules behave`),
        );
        logger.stdout.write(
            chalk.yellowBright(` differently from their TSLint counterparts: 📢${EOL}`),
        );

        rulesWithNotices.forEach(rule => {
            logger.stdout.write(chalk.yellow(`* ${rule.ruleName}:${EOL}`));
            if (rule.notices !== undefined) {
                rule.notices.forEach(notice => {
                    logger.stdout.write(chalk.yellow(`- ${notice}${EOL}`));
                });
            }
        });
    }
};
