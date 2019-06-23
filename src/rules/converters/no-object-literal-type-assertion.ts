import { RuleConverter } from "../converter";

export const convertNoObjectLiteralTypeAssertion: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-object-literal-type-assertion",
            },
        ],
    };
};
