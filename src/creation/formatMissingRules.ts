import { TSLintRuleOptions } from "../rules/types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const formatMissingRules = (missing: TSLintRuleOptions[], rulesDirectory: string[] = []) => {
    const rules: Record<string, unknown> = {};

    for (const rule of missing.sort((a, b) => a.ruleName.localeCompare(b.ruleName))) {
        if (rule.ruleSeverity !== "off") {
            rules[rule.ruleName] = formatRuleArguments(rule);
        }
    }

    return [
        "error",
        {
            ...(rulesDirectory.length !== 0 && { rulesDirectory }),
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
