import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../adapters/logger";
import { RuleConversionResults } from "../rules/convertRules";
import { ESLintRuleOptions, TSLintRuleOptions } from "../rules/types";
import { ReportConversionResultsDependencies } from "./dependencies";
import {
    logFailedConversions,
    logMissingConversionTarget,
    logMissingPlugins,
    logSuccessfulConversions,
} from "./reportOutputs";

export const reportConversionResults = (
    dependencies: ReportConversionResultsDependencies,
    ruleConversionResults: RuleConversionResults,
) => {
    if (ruleConversionResults.converted.size !== 0) {
        logSuccessfulConversions("rule", ruleConversionResults.converted, dependencies.logger);
        logNotices(ruleConversionResults.converted, dependencies.logger);
    }

    if (ruleConversionResults.failed.length !== 0) {
        logFailedConversions(ruleConversionResults.failed, dependencies.logger);
    }

    if (ruleConversionResults.missing.length !== 0) {
        const missingSettingOutputMapping = (setting: TSLintRuleOptions) =>
            `${setting.ruleName} does not yet have an ESLint equivalent.${EOL}`;
        const additionalWarnings = [`defaulting to eslint-plugin-tslint for these rules`];
        logMissingConversionTarget(
            "rule",
            missingSettingOutputMapping,
            ruleConversionResults.missing,
            dependencies.logger,
            additionalWarnings,
        );
    }

    if (ruleConversionResults.plugins.size !== 0) {
        logMissingPlugins(ruleConversionResults.plugins, dependencies.logger);
    }
};

type RuleWithNotices = {
    notices: any[];
    ruleName: string;
};

const logNotices = (converted: Map<string, ESLintRuleOptions>, logger: Logger) => {
    const rulesWithNotices = Array.from(converted.values()).filter(
        ruleOptions => ruleOptions.notices && ruleOptions.notices.length >= 1,
    ) as RuleWithNotices[];

    if (rulesWithNotices.length !== 0) {
        logger.stdout.write(chalk.yellowBright(`📢 ${rulesWithNotices.length} ESLint`));
        logger.stdout.write(
            chalk.yellowBright(rulesWithNotices.length === 1 ? ` rule behaves` : ` rules behave`),
        );
        logger.stdout.write(
            chalk.yellowBright(` differently from their TSLint counterparts: 📢${EOL}`),
        );

        for (const rule of rulesWithNotices) {
            logger.stdout.write(chalk.yellow(`* ${rule.ruleName}:${EOL}`));

            for (const notice of rule.notices) {
                logger.stdout.write(chalk.yellow(`  - ${notice}${EOL}`));
            }
        }
    }
};
