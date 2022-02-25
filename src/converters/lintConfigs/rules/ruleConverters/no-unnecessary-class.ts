import { RuleConverter } from "../ruleConverter.js";

export const convertNoUnnecessaryClass: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-extraneous-class",
            },
        ],
    };
};
