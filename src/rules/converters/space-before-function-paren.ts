import { RuleConverter } from "../converter";

export const convertSpaceBeforeFunctionParen: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "space-before-function-paren",
            },
        ],
    };
};
