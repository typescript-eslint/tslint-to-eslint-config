import { RuleConverter } from "../ruleConverter.js";

export const convertNoParameterProperties: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-parameter-properties",
            },
        ],
    };
};
