import { RuleConverter } from "../converter";

export const convertSpaceWithinParens: RuleConverter = tslintRule => {
    const arg = tslintRule.ruleArguments.length === 1 ? "always" : "never";
    return {
        rules: [
            {
                ruleArguments: [arg],
                ruleName: "@typescript-eslint/space-within-parens",
                notices: ["The number of spaces will be ignored"],
            },
        ],
    };
};
