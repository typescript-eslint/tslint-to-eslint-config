import { RuleConverter } from "../ruleConverter";

export const convertNoUselessCast: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-type-assertion",
            },
        ],
    };
};
