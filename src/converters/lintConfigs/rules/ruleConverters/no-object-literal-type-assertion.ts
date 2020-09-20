import { RuleConverter } from "../ruleConverter";

export const convertNoObjectLiteralTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/consistent-type-assertions",
            },
        ],
    };
};
