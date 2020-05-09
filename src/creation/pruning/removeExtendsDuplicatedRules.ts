import { isDeepStrictEqual } from "util";

import { ESLintRuleOptions } from "../../rules/types";

export const removeExtendsDuplicatedRules = (
    allRules: Map<string, ESLintRuleOptions>,
    extensionRules: Map<string, ESLintRuleOptions>,
) => {
    const differentRules = new Map<string, ESLintRuleOptions>();

    for (const [ruleName, value] of allRules) {
        if (ruleValuesAreTheSame(value, extensionRules.get(ruleName))) {
            differentRules.set(ruleName, value);
        }
    }

    return differentRules;
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
