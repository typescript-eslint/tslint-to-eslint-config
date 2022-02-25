import { RuleConverter } from "../ruleConverter.js";

export const convertNoReference: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/triple-slash-reference",
            },
        ],
    };
};
