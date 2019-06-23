import { RuleConverter } from "../converter";

export const convertNoVarRequires: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-var-requires",
            },
        ],
    };
};
