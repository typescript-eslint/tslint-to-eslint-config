import { TSLintRuleOptions } from "../rules/types";

export const formatMissingRules = (missing: TSLintRuleOptions[], ruleDirectories: string[]) => {
    const rules: { [i: string]: unknown } = {};

    for (const rule of missing.sort((a, b) => a.ruleName.localeCompare(b.ruleName))) {
        if (rule.ruleSeverity !== "off") {
            rules[rule.ruleName] = formatRuleArguments(rule);
        }
    }

    return [
        "error",
        {
            ...(ruleDirectories.length !== 0 && { ruleDirectories }),
            rules,
        },
    ];
};

const formatRuleArguments = (rule: TSLintRuleOptions) => {
    if (rule.ruleArguments.length === 0) {
        return true;
    }

    return [true, ...rule.ruleArguments];
};
