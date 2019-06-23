import { RuleConverter } from "../converter";

export const convertTypedefWhitespace: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/type-annotation-spacing",
            },
        ],
    };
};
