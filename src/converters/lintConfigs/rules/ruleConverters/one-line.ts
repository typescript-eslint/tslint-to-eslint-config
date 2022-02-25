import { RuleConverter } from "../ruleConverter.js";

export const CheckAllTokensMsg = "ESLint's brace-style will check all tokens.";

export const convertOneLine: RuleConverter = (tslintRule) => {
    const ruleLen = tslintRule.ruleArguments.length;
    return {
        rules: [
            {
                notices: ruleLen > 0 && ruleLen < 5 ? [CheckAllTokensMsg] : undefined,
                ruleArguments: [ruleLen > 0 ? "1tbs" : "off"],
                ruleName: "brace-style",
            },
        ],
    };
};
