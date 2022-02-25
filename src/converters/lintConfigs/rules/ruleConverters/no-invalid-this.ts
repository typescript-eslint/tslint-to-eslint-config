import { RuleConverter } from "../ruleConverter.js";

export const convertNoInvalidThis: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(!tslintRule.ruleArguments.includes("check-function-in-method") && {
                    notices: ["Functions in methods will no longer be ignored."],
                }),
                ruleName: "no-invalid-this",
            },
        ],
    };
};
