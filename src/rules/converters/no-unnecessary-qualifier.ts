import { RuleConverter } from "../converter";

export const convertNoUnnecessaryQualifier: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-qualifier",
            },
        ],
    };
};
