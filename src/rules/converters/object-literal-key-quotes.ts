import { RuleConverter } from "../converter";

export const convertObjectLiteralKeyQuotes: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ruleArguments: tslintRule.ruleArguments,
                ruleName: "quote-props",
            },
        ],
    };
};
