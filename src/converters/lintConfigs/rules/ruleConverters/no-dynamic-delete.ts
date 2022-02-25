import { RuleConverter } from "../ruleConverter.js";

export const convertNoDynamicDelete: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-dynamic-delete",
            },
        ],
    };
};
