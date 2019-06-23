import { RuleConverter } from "../converter";

export const convertNoParameterProperties: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-parameter-properties",
            },
        ],
    };
};
