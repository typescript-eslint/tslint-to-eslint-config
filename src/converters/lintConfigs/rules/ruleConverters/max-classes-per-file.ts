import { RuleConverter } from "../ruleConverter";

export const convertMaxClassesPerFile: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.includes("exclude-class-expressions") && {
                    notices: ["Class expressions will no longer be ignored."],
                }),
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [tslintRule.ruleArguments[0]],
                }),
                ruleName: "max-classes-per-file",
            },
        ],
    };
};
