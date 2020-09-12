import { RuleConverter } from "../ruleConverter";

export const convertObjectLiteralShorthand: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "object-shorthand",
            },
        ],
    };
};
