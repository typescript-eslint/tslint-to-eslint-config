import { RuleConverter } from "../ruleConverter";

export const convertNoVarRequires: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-var-requires",
            },
        ],
    };
};
