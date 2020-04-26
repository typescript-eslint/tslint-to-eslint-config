import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../adapters/logger";
import { SansDependencies } from "../binding";
import { RuleConversionResults } from "../rules/convertRules";
import { ESLintRuleOptions, TSLintRuleOptions } from "../rules/types";
import { choosePackageManager } from "./packages/choosePackageManager";
import {
    logFailedConversions,
    logMissingConversionTarget,
    logMissingPackages,
    logSuccessfulConversions,
} from "./reportOutputs";

export type ReportConversionResultsDependencies = {
    logger: Logger;
    choosePackageManager: SansDependencies<typeof choosePackageManager>;
};

export const reportConversionResults = async (
    dependencies: ReportConversionResultsDependencies,
    outputPath: string,
    ruleConversionResults: RuleConversionResults,
) => {
    const packageManager = await dependencies.choosePackageManager();

    if (ruleConversionResults.converted.size !== 0) {
        logSuccessfulConversions("rule", ruleConversionResults.converted, dependencies.logger);
        logNotices(ruleConversionResults.converted, dependencies.logger);
    }

    if (ruleConversionResults.failed.length !== 0) {
        logFailedConversions(ruleConversionResults.failed, dependencies.logger);
    }

    if (ruleConversionResults.missing.length !== 0) {
        logMissingConversionTarget(
            "rule",
            (setting: TSLintRuleOptions) => setting.ruleName,
            ruleConversionResults.missing,
            dependencies.logger,
            [
                `The "@typescript-eslint/tslint/config" section of ${outputPath} configures eslint-plugin-tslint to run ${
                    ruleConversionResults.missing.length === 1 ? "it" : "them"
                } in TSLint within ESLint.`,
            ],
        );
    }

    logMissingPackages(ruleConversionResults.plugins, packageManager, dependencies.logger);
};

type RuleWithNotices = {
    notices: any[];
    ruleName: string;
};

const logNotices = (converted: Map<string, ESLintRuleOptions>, logger: Logger) => {
    const rulesWithNotices = Array.from(converted.values()).filter(
        (ruleOptions) => ruleOptions.notices && ruleOptions.notices.length >= 1,
    ) as RuleWithNotices[];

    if (rulesWithNotices.length === 0) {
        return;
    }

    const behavior =
        rulesWithNotices.length === 1
            ? " behaves differently from its TSLint counterpart"
            : "s behave differently from their TSLint counterparts";

    logger.stdout.write(
        chalk.blueBright(`${EOL}❗ ${rulesWithNotices.length} ESLint rule${behavior} ❗${EOL}`),
    );
    logger.stdout.write(chalk.blue(`  Check ${logger.debugFileName} for details.${EOL}`));
    logger.info.write(`${rulesWithNotices.length} ESLint rule${behavior}:${EOL}`);

    for (const rule of rulesWithNotices) {
        logger.info.write(`  * ${rule.ruleName}:${EOL}`);

        for (const notice of rule.notices) {
            logger.info.write(`    - ${notice}${EOL}`);
        }
    }

    logger.info.write(EOL);
};
