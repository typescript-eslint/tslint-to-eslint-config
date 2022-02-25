import { RuleConverter } from "../ruleConverter.js";

export const convertNoUnnecessaryQualifier: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-qualifier",
            },
        ],
    };
};
