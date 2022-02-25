import { isDeepStrictEqual } from "util";

import { ESLintRuleOptions, ESLintRuleOptionsWithArguments } from "../rules/types.js";

/**
 * Finds only the ESLint rules configured differently than their (extended) configurations.
 */
export const removeExtendsDuplicatedRules = (
    userRules: Map<string, ESLintRuleOptions>,
    extensionRules: Map<string, ESLintRuleOptionsWithArguments>,
) => {
    const differentRules = new Map<string, ESLintRuleOptions>();

    for (const [ruleName, value] of userRules) {
        if (!ruleValuesAreTheSame(value, extensionRules.get(ruleName))) {
            differentRules.set(ruleName, value);
        }
    }

    return { differentRules, extensionRules };
};

const ruleValuesAreTheSame = (
    configurationValue: ESLintRuleOptions,
    extensionValue: ESLintRuleOptionsWithArguments | undefined,
) => {
    return (
        extensionValue !== undefined &&
        configurationValue.ruleSeverity === extensionValue.ruleSeverity &&
        isDeepStrictEqual(configurationValue.ruleArguments ?? [], extensionValue.ruleArguments)
    );
};
