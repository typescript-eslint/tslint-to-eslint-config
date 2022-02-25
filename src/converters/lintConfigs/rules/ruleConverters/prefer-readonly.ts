import { RuleConverter } from "../ruleConverter.js";

export const convertPreferReadonly: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.includes("only-inline-lambdas") && {
                    ruleArguments: [{ onlyInlineLambdas: true }],
                }),
                ruleName: "@typescript-eslint/prefer-readonly",
            },
        ],
    };
};
