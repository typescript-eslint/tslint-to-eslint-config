import { RuleConverter } from "../converter";

export const convertNoThisAssignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-this-alias",
            },
        ],
    };
};
