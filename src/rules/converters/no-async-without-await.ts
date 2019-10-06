import { RuleConverter } from "../converter";

export const convertNoAsyncWithoutAwait: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/require-await",
            },
        ],
    };
};
