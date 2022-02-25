import { TSLintRuleOptions } from "../types.js";

export const formatRawTslintRule = (
    ruleName: string,
    value: Partial<TSLintRuleOptions>,
): TSLintRuleOptions => ({
    ruleArguments: [],
    ruleName,
    ruleSeverity: "error",
    ...value,
});
