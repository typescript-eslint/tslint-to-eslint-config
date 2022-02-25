import { RuleConverter } from "../ruleConverter.js";

export const convertNoEmptyInterface: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-empty-interface",
            },
        ],
    };
};
