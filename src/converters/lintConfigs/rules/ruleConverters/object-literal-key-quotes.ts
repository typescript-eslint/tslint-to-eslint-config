import { RuleConverter } from "../ruleConverter";

export const convertObjectLiteralKeyQuotes: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "quote-props",
            },
        ],
    };
};
