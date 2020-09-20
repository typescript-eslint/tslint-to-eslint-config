import { RuleConverter } from "../ruleConverter";

export const convertNoParameterProperties: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-parameter-properties",
            },
        ],
    };
};
