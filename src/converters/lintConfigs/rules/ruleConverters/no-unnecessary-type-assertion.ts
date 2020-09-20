import { RuleConverter } from "../ruleConverter";

export const convertNoUnnecessaryTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-type-assertion",
            },
        ],
    };
};
