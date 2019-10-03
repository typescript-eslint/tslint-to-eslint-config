import { RuleConverter } from "../converter";

export const convertNoForIn: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "no-restricted-syntax",
            },
        ],
    };
};
