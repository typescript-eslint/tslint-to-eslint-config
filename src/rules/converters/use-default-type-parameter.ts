import { RuleConverter } from "../converter";

export const convertUseDefaultTypeParameter: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-type-arguments",
            },
        ],
    };
};
