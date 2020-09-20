import { RuleConverter } from "../ruleConverter";

export const convertNoUnnecessaryClass: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-extraneous-class",
            },
        ],
    };
};
