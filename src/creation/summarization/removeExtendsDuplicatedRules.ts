import { isDeepStrictEqual } from "util";

import {
    ESLintConfiguration,
    ESLintConfigurationRuleValue,
} from "../../input/findESLintConfiguration";
import { convertRawESLintRuleSeverity } from "../../rules/convertRuleSeverity";
import { ESLintRuleOptions } from "../../rules/types";

export const removeExtendsDuplicatedRules = (
    allRules: Map<string, ESLintRuleOptions>,
    extensions: Partial<ESLintConfiguration>[],
) => {
    const differentRules = new Map<string, ESLintRuleOptions>();
    const extensionRules = mergeExtensions(extensions);

    for (const [ruleName, value] of allRules) {
        if (ruleValuesAreTheSame(value, extensionRules.get(ruleName))) {
            differentRules.set(ruleName, value);
        }
    }

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

const ruleValuesAreTheSame = (
    configurationValue: ESLintRuleOptions,
    extensionValue: ESLintRuleOptions | undefined,
) => {
    return (
        extensionValue !== undefined &&
        configurationValue.ruleSeverity === extensionValue.ruleSeverity &&
        isDeepStrictEqual(
            {
                ruleArguments: [],
                ...configurationValue.ruleArguments,
            },
            {
                ruleArguments: [],
                ...extensionValue.ruleArguments,
            },
        )
    );
};
