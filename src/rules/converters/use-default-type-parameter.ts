import { RuleConverter } from "../converter";

export const convertUseDefaultTypeParameter: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/use-default-type-parameter",
            },
        ],
    };
};
