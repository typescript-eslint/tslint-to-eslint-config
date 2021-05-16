import { RuleConverter } from "../ruleConverter";

export const convertNoDynamicDelete: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-dynamic-delete",
            },
        ],
    };
};
