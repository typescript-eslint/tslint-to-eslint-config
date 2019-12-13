import { RuleConverter } from "../converter";

export const convertNoUseBeforeDeclare: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-use-before-define",
            },
        ],
    };
};
