import { ESLintConfigurationRules } from "../../input/findESLintConfiguration";
import { ESLintRuleOptions } from "../../rules/types";
import { normalizeRawESLintRuleSeverity } from "../pruning/normalizeRawESLintRuleSeverity";

/**
 * Normalizes raw ESLint rule configurations into our standardized output format.
 */
export const normalizeESLintRules = (userRules: ESLintConfigurationRules | undefined) => {
    const output: Map<string, ESLintRuleOptions> = new Map();

    for (const [ruleName, configuration] of Object.entries(userRules ?? {})) {
        const [rawRuleSeverity, ruleArguments] =
            configuration instanceof Array ? configuration : [configuration, {}];
        const ruleSeverity = normalizeRawESLintRuleSeverity(rawRuleSeverity);

        output.set(ruleName, { ruleArguments, ruleName, ruleSeverity });
    }

    return output;
};
