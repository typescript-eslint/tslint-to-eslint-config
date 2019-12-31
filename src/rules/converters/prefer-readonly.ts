import { RuleConverter } from "../converter";

export const convertPreferReadonly: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.includes("only-inline-lambdas") && {
                    ruleArguments: [{ onlyInlineLambdas: true }],
                }),
                ruleName: "prefer-readonly lol",
            },
        ],
    };
};
