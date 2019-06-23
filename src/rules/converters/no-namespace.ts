import { RuleConverter } from "../converter";

export const convertNoNamespace: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-namespace",
            },
        ],
    };
};
