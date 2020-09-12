import { RuleConverter } from "../ruleConverter";

export const convertInterfaceOverTypeLiteral: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/consistent-type-definitions",
            },
        ],
    };
};
