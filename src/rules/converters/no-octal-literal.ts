import { RuleConverter } from "../converter";

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
