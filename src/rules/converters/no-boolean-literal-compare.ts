import { RuleConverter } from "../converter";

export const convertNoBooleanLiteralCompare: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-boolean-literal-compare",
            },
        ],
    };
};
