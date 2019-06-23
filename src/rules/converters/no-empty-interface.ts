import { RuleConverter } from "../converter";

export const convertNoEmptyInterface: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-empty-interface",
            },
        ],
    };
};
