import { RuleConverter } from "../ruleConverter.js";

export const convertNoInvalidAwait: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/await-thenable",
            },
        ],
    };
};
