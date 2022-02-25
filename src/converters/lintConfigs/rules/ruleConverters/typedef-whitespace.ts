import { RuleConverter } from "../ruleConverter.js";

export const convertTypedefWhitespace: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/type-annotation-spacing",
            },
        ],
    };
};
