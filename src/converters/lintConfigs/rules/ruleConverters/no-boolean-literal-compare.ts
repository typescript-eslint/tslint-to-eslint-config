import { RuleConverter } from "../ruleConverter.js";

export const convertNoBooleanLiteralCompare: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-boolean-literal-compare",
            },
        ],
    };
};
