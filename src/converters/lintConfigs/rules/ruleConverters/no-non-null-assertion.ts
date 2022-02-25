import { RuleConverter } from "../ruleConverter.js";

export const convertNoNonNullAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-non-null-assertion",
            },
        ],
    };
};
