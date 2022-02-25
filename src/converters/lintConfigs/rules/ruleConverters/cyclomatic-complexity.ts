import { RuleConverter } from "../ruleConverter.js";

export const convertCyclomaticComplexity: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            max: tslintRule.ruleArguments[0],
                        },
                    ],
                }),
                ruleName: "complexity",
            },
        ],
    };
};
