import { ESLintConfigurationRules } from "../../input/findESLintConfiguration";
import { convertRawESLintRuleSeverity } from "../../rules/formats/convertRuleSeverity";
import { ESLintRuleOptions } from "../../rules/types";

/**
 * Normalizes raw ESLint rule configurations into our standardized output format.
 */
export const normalizeESLintRules = (userRules: ESLintConfigurationRules | undefined) => {
    const output: Map<string, ESLintRuleOptions> = new Map();

    for (const [ruleName, configuration] of Object.entries(userRules ?? {})) {
        const [rawRuleSeverity, ruleArguments] =
            configuration instanceof Array ? configuration : [configuration, {}];
        const ruleSeverity = convertRawESLintRuleSeverity(rawRuleSeverity);

        output.set(ruleName, { ruleArguments, ruleName, ruleSeverity });
    }

    return output;
};
