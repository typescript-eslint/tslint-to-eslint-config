import { RuleConverter } from "../ruleConverter.js";

export const convertNoAngleBracketTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/consistent-type-assertions",
            },
        ],
    };
};
