import { TSLintRuleOptions } from "../rules/types";

export const formatMissingRules = (missing: TSLintRuleOptions[]) => {
    const rules: { [i: string]: unknown } = {};

    for (const rule of missing.sort((a, b) => a.ruleName.localeCompare(b.ruleName))) {
        if (rule.ruleSeverity !== "off") {
            rules[rule.ruleName] = formatRuleArguments(rule);
        }
    }

    return [
        "error",
        {
            rules,
            // TODO: rulesDirectory?
        },
    ];
};

const formatRuleArguments = (rule: TSLintRuleOptions) => {
    if (rule.ruleArguments.length === 0) {
        return true;
    }

    return [true, ...rule.ruleArguments];
};
