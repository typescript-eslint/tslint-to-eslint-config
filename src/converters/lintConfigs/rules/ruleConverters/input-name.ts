import { RuleConverter } from "../ruleConverter";

export const convertInputName: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "output-name",
            },
        ],
    };
};
