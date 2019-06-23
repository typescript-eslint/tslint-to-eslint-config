import { RuleConverter } from "../converter";

export const convertNoInvalidTemplateStrings: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-template-curly-in-string",
            },
        ],
    };
};
