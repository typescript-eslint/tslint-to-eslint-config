import { RuleConverter } from "../ruleConverter.js";

export const convertNoOctalLiteral: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-octal",
            },
            {
                ruleName: "no-octal-escape",
            },
        ],
    };
};
