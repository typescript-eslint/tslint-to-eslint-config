import { RuleConverter } from "../converter";

export const convertPreferReadonly: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 &&
                    tslintRule.ruleArguments[0] === "only-inline-lambdas" && {
                        ruleArguments: [{ onlyInlineLambdas: true }],
                    }),
                ruleName: "prefer-readonly",
            },
        ],
    };
};
