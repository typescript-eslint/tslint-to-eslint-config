import { RuleConverter } from "../ruleConverter.js";

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
