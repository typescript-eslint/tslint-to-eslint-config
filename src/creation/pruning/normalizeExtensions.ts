import {
    ESLintConfiguration,
    ESLintConfigurationRuleValue,
} from "../../input/findESLintConfiguration";
import { ESLintRuleOptionsWithArguments } from "../../rules/types";
import { normalizeRawESLintRuleSeverity } from "./normalizeRawESLintRuleSeverity";

export const normalizeExtensions = (extensions: Partial<ESLintConfiguration>[]) => {
    const mergedRules = new Map<string, ESLintRuleOptionsWithArguments>();

    for (const extension of extensions) {
        if (extension.rules === undefined) {
            continue;
        }

        for (const ruleName in extension.rules) {
            mergedRules.set(ruleName, formatRuleArguments(ruleName, extension.rules[ruleName]));
        }
    }

    return mergedRules;
};

const formatRuleArguments = (
    ruleName: string,
    originalValue: ESLintConfigurationRuleValue,
): ESLintRuleOptionsWithArguments => {
    if (originalValue instanceof Array) {
        return {
            ruleArguments: originalValue.slice(1),
            ruleName,
            ruleSeverity: normalizeRawESLintRuleSeverity(originalValue[0]),
        };
    }

    return {
        ruleArguments: [],
        ruleName,
        ruleSeverity: normalizeRawESLintRuleSeverity(originalValue),
    };
};
