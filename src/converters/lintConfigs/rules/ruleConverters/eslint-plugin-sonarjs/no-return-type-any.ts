import { RuleConverter } from "../../ruleConverter";

export const convertNoReturnTypeAny: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unsafe-return",
            },
        ],
    };
};
