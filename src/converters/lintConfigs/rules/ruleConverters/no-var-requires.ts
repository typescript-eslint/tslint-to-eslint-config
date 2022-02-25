import { RuleConverter } from "../ruleConverter.js";

export const convertNoVarRequires: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-var-requires",
            },
        ],
    };
};
