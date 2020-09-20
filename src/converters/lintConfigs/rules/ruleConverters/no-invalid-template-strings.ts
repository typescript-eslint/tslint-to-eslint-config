import { RuleConverter } from "../ruleConverter";

export const convertNoInvalidTemplateStrings: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-template-curly-in-string",
            },
        ],
    };
};
