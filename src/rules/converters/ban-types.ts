import { RuleConverter } from "../converter";

export const convertBanTypes: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/ban-types",
            },
        ],
    };
};
