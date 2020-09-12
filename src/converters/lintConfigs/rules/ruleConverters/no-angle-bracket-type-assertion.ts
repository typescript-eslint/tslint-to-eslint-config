import { RuleConverter } from "../ruleConverter";

export const convertNoAngleBracketTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/consistent-type-assertions",
            },
        ],
    };
};
