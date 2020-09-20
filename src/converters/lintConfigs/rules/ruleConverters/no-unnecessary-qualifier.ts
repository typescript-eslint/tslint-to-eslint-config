import { RuleConverter } from "../ruleConverter";

export const convertNoUnnecessaryQualifier: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-qualifier",
            },
        ],
    };
};
