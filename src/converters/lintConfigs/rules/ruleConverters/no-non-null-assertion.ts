import { RuleConverter } from "../ruleConverter";

export const convertNoNonNullAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-non-null-assertion",
            },
        ],
    };
};
