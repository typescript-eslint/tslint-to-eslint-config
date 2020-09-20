import { RuleConverter } from "../ruleConverter";

export const convertClassName: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/naming-convention",
            },
        ],
    };
};
