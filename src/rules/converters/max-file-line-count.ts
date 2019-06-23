import { RuleConverter } from "../converter";

export const convertMaxFileLineCount: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "max-lines",
            },
        ],
    };
};
