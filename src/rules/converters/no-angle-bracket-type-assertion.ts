import { RuleConverter } from "../converter";

export const convertNoAngleBracketTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-angle-bracket-type-assertion",
            },
        ],
    };
};
