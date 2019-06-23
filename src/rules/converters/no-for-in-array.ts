import { RuleConverter } from "../converter";

export const convertNoForInArray: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-for-in-array",
            },
        ],
    };
};
