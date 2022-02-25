import { RuleConverter } from "../ruleConverter.js";

export const convertNoUnboundMethod: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/unbound-method",
            },
        ],
    };
};
