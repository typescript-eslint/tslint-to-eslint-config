import { RuleConverter } from "../ruleConverter.js";

export const convertNoUnnecessaryTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-type-assertion",
            },
        ],
    };
};
