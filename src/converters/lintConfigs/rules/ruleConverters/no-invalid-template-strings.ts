import { RuleConverter } from "../ruleConverter.js";

export const convertNoInvalidTemplateStrings: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-template-curly-in-string",
            },
        ],
    };
};
