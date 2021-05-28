import { RuleConverter } from "../ruleConverter";

export const convertNoUseBeforeDeclare: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-use-before-define",
                ruleSeverity: "off",
            },
            {
                ruleName: "@typescript-eslint/no-use-before-define",
            },
        ],
    };
};
