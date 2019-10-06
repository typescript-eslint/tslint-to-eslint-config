import { RuleConverter } from "../converter";

// See here for reference
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
export const convertUseDefaultTypeParameter: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-type-arguments",
            },
        ],
    };
};
