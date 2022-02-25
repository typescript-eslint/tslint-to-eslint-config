import { RuleConverter } from "../ruleConverter.js";

export const convertClassName: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/naming-convention",
            },
        ],
    };
};
