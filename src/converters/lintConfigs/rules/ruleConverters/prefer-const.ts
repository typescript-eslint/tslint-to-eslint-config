import { RuleConverter } from "../ruleConverter";

export const convertPreferConst: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "prefer-const",
            },
        ],
    };
};
