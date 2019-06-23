import { RuleConverter } from "../converter";

export const convertNoParameterReassignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-param-reassign",
            },
        ],
    };
};
