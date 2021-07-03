import { RuleConverter } from "../ruleConverter";

export const convertPreferArrayLiteral: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-array-constructor",
                ruleSeverity: "off",
            },
            {
                ruleName: "@typescript-eslint/no-array-constructor",
            },
        ],
    };
};
