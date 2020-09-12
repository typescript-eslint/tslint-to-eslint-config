import { RuleConverter } from "../ruleConverter";

export const convertTypedefWhitespace: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/type-annotation-spacing",
            },
        ],
    };
};
