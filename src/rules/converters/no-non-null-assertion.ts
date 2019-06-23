import { RuleConverter } from "../converter";

export const convertNoNonNullAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-non-null-assertion",
            },
        ],
    };
};
