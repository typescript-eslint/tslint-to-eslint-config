import { RuleConverter } from "../converter";

export const convertSpaceWithinParens: RuleConverter = tslintRule => {
    let arg = "";
    if (tslintRule.ruleArguments.length === 1) {
        arg = "always";
    } else {
        arg = "never";
    }
    return {
        rules: [
            {
                ruleArguments: [arg],
                ruleName: "@typescript-eslint/space-within-parens",
            },
        ],
    };
};
