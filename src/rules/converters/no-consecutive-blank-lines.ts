import { RuleConverter } from "../converter";

export const convertNoConsecutiveBlankLines: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [{ max: tslintRule.ruleArguments[0] }],
                }),
                ruleName: "no-multiple-empty-lines",
            },
        ],
    };
};
