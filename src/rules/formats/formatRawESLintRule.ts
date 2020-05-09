import { ESLintRuleOptions, RawESLintRuleSeverity } from "../types";
import { convertRawESLintRuleSeverity } from "../formats/convertRuleSeverity";

export const formatRawTslintRule = (
    ruleName: string,
    severity: RawESLintRuleSeverity,
    ...ruleArguments: unknown[]
): ESLintRuleOptions => ({
    ruleName,
    ruleArguments,
    ruleSeverity: convertRawESLintRuleSeverity(severity),
});
