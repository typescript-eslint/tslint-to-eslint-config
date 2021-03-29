import { RuleConverter } from "../ruleConverter";

export const convertPreferArrayLiteral: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-array-constructor",
            },
        ],
    };
};
