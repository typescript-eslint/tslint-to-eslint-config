import { RuleConverter } from "../converter";

export const convertSpaceWithinParens: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "@typescript-eslint/space-within-parens",
            },
        ],
    };
};
