import { RuleConverter } from "../converter";

export const convertNoUnboundMethod: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/unbound-method",
            },
        ],
    };
};
