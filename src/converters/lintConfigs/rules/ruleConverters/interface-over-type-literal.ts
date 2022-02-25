import { RuleConverter } from "../ruleConverter.js";

export const convertInterfaceOverTypeLiteral: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/consistent-type-definitions",
            },
        ],
    };
};
