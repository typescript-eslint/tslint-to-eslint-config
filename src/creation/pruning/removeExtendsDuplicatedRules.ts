import { isDeepStrictEqual } from "util";

import {
    ESLintConfiguration,
    ESLintConfigurationRuleValue,
} from "../../input/findESLintConfiguration";
import { convertRawESLintRuleSeverity } from "../../rules/formats/convertRuleSeverity";
import { ESLintRuleOptions, ESLintRuleOptionsWithArguments } from "../../rules/types";

/**
 * Finds the ESLint rules that aren't configured the same as their last preset
 */
export const removeExtendsDuplicatedRules = (
    allRules: Map<string, ESLintRuleOptions>,
    extensions: Partial<ESLintConfiguration>[],
) => {
    const differentRules = new Map<string, ESLintRuleOptions>();
    const extensionRules = mergeExtensions(extensions);

    for (const [ruleName, value] of allRules) {
        if (!ruleValuesAreTheSame(value, extensionRules.get(ruleName))) {
            differentRules.set(ruleName, value);
        }
    }

    return { differentRules, extensionRules };
};

const mergeExtensions = (extensions: Partial<ESLintConfiguration>[]) => {
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
