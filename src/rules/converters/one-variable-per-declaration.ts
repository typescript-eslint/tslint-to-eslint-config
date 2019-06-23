import { RuleConverter } from "../converter";

export const convertOneVariablePerDeclaration: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(!tslintRule.ruleArguments.includes("ignore-for-loop") && {
                    notices: ["Variables declared in for loops will no longer be checked."],
                }),
                ruleName: "object-shorthand",
            },
        ],
    };
};
