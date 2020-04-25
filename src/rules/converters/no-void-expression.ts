import { RuleConverter } from "../converter";

export const convertNoVoidExpression: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.includes("ignore-arrow-function-shorthand") && {
                    notices: ["ESLint does not support ignoring arrow function shorthand."],
                }),
                ruleName: "no-void",
            },
        ],
    };
};
