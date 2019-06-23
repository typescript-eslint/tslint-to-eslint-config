import { RuleConverter } from "../converter";

export const convertIndent: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/indent",
            },
        ],
    };
};
