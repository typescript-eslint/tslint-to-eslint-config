import {
    ESLintConfiguration,
    ESLintConfigurationRuleValue,
} from "../../input/findESLintConfiguration";
import { convertRawESLintRuleSeverity } from "../../rules/formats/convertRuleSeverity";
import { ESLintRuleOptions } from "../../rules/types";
import { removeExtendsDuplicatedRules } from "./removeExtendsDuplicatedRules";

export const removeAllExtendsDuplicatedRules = (
    allRules: Map<string, ESLintRuleOptions>,
    extensions: Partial<ESLintConfiguration>[],
) => {
    const extensionRules = mergeExtensions(extensions);
    const differentRules = removeExtendsDuplicatedRules(allRules, extensionRules);

    return { differentRules, extensionRules };
};

const mergeExtensions = (extensions: Partial<ESLintConfiguration>[]) => {
    const mergedRules = new Map<string, ESLintRuleOptions>();

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
): ESLintRuleOptions => {
    if (typeof originalValue === "number") {
        return {
            ruleArguments: [],
            ruleName,
            ruleSeverity: convertRawESLintRuleSeverity(originalValue),
        };
    }

    if (typeof originalValue === "string") {
        return {
            ruleArguments: [],
            ruleName,
            ruleSeverity: originalValue,
        };
    }

    return {
        ruleArguments: originalValue.slice(1),
        ruleName,
        ruleSeverity: convertRawESLintRuleSeverity(originalValue[0]),
    };
};
