import { RuleConverter } from "../converter";

export const convertInterfaceOverTypeLiteral: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/consistent-type-definitions",
            },
        ],
    };
};
