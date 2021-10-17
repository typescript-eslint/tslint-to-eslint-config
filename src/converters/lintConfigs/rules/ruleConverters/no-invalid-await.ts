import { RuleConverter } from "../ruleConverter";

export const convertNoInvalidAwait: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/await-thenable",
            },
        ],
    };
};
