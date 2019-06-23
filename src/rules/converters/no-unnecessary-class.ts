import { RuleConverter } from "../converter";

export const convertNoUnnecessaryClass: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-extraneous-class",
            },
        ],
    };
};
