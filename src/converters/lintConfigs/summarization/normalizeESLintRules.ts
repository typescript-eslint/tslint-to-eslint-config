import {
    ESLintConfigurationRules,
    ESLintConfigurationRuleValue,
} from "../../../input/findESLintConfiguration.js";
import { normalizeRawESLintRuleSeverity } from "../pruning/normalizeRawESLintRuleSeverity.js";
import { ESLintRuleOptions, RawESLintRuleSeverity } from "../rules/types.js";

/**
 * Normalizes raw ESLint rule configurations into our standardized output format.
 */
export const normalizeESLintRules = (userRules: ESLintConfigurationRules | undefined) => {
    const output: Map<string, ESLintRuleOptions> = new Map();

    for (const [ruleName, rawRuleValue] of Object.entries(userRules ?? {})) {
        const [rawRuleSeverity, ruleArguments] = parseRawRuleValue(rawRuleValue);
        const ruleSeverity = normalizeRawESLintRuleSeverity(rawRuleSeverity);

        output.set(ruleName, { ruleArguments, ruleName, ruleSeverity });
    }

    return output;
};

const parseRawRuleValue = (
    configuration: ESLintConfigurationRuleValue,
): [RawESLintRuleSeverity, any[]] => {
    return configuration instanceof Array
        ? [configuration[0], configuration.slice(1)]
        : [configuration, [{}]];
};
