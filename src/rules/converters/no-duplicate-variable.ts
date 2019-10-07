import { RuleConverter } from "../converter";

export const convertNoDuplicateVariable: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.includes("check-parameters") && {
                    notices: ["ESLint does not support check-parameters."],
                }),
                ruleName: "no-redeclare",
            },
        ],
    };
};
