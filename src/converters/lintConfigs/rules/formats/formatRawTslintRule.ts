import { TSLintRuleOptions } from "../types";

export const formatRawTslintRule = (
    ruleName: string,
    value: Partial<TSLintRuleOptions>,
): TSLintRuleOptions => ({
    ruleArguments: [],
    ruleName,
    ruleSeverity: "error",
    ...value,
});
