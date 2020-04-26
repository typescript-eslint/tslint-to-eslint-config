import { RuleConverter } from "../converter";

export const CheckAllTokensMsg = "ESLint's brace-style will check all tokens.";

export const convertOneLine: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    notices: [CheckAllTokensMsg],
                }),
                ruleArguments: ["1tbs"],
                ruleName: "brace-style",
            },
        ],
    };
};
