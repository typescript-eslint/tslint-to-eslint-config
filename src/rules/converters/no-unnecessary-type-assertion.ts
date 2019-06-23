import { RuleConverter } from "../converter";

export const convertNoUnnecessaryTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-type-assertion",
            },
        ],
    };
};
