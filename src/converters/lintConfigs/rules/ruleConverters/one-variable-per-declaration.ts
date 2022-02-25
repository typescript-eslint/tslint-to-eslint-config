import { RuleConverter } from "../ruleConverter.js";

export const convertOneVariablePerDeclaration: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(!tslintRule.ruleArguments.includes("ignore-for-loop") && {
                    notices: ["Variables declared in for loops will no longer be checked."],
                }),
                ruleArguments: ["never"],
                ruleName: "one-var",
            },
        ],
    };
};
