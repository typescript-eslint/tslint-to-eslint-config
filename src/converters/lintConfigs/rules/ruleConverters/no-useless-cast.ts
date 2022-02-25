import { RuleConverter } from "../ruleConverter.js";

export const convertNoUselessCast: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-type-assertion",
            },
        ],
    };
};
