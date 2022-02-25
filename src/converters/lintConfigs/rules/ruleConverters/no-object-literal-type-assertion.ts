import { RuleConverter } from "../ruleConverter.js";

export const convertNoObjectLiteralTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/consistent-type-assertions",
            },
        ],
    };
};
