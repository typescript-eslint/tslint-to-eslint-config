import { RuleConverter } from "../ruleConverter.js";

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
