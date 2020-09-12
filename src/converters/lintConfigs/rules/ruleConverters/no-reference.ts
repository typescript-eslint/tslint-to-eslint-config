import { RuleConverter } from "../ruleConverter";

export const convertNoReference: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/triple-slash-reference",
            },
        ],
    };
};
