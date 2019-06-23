import { RuleConverter } from "../converter";

export const convertArrayType: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/array-type",
            },
        ],
    };
};
