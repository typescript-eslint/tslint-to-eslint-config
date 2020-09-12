import { RuleConverter } from "../ruleConverter";

export const convertNoEmptyInterface: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-empty-interface",
            },
        ],
    };
};
