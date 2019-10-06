import { RuleConverter } from "../converter";

export const convertSpaceWithinParens: RuleConverter = tslintRule => {
    let arg = "never";
    const notices = [];

    if (tslintRule.ruleArguments.length === 1) {
        arg = "always";
        notices.push("The number of spaces will be ignored");
    }

    return {
        rules: [
            {
                ruleArguments: [arg],
                ruleName: "@typescript-eslint/space-within-parens",
                notices,
            },
        ],
    };
};
