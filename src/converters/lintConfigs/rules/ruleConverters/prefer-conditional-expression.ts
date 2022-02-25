import { RuleConverter } from "../ruleConverter.js";

export const PREFER_CONDITIONAL_EXPRESSION_NOTICE =
    "The eslint-plugin-unicorn only supports simple 'if-else' statements.";

export const convertPreferConditionalExpression: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    notices: [PREFER_CONDITIONAL_EXPRESSION_NOTICE],
                }),
                ruleName: "unicorn/prefer-ternary",
            },
        ],
        plugins: ["eslint-plugin-unicorn"],
    };
};
