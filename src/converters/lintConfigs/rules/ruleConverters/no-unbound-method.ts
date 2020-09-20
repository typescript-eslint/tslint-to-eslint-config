import { RuleConverter } from "../ruleConverter";

export const convertNoUnboundMethod: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/unbound-method",
            },
        ],
    };
};
