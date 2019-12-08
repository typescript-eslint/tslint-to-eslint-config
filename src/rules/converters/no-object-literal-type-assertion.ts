import { RuleConverter } from "../converter";

export const convertNoObjectLiteralTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/consistent-type-assertions",
            },
        ],
    };
};
