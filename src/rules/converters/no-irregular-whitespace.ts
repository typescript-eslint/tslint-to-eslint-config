import { RuleConverter } from "../converter";

export const convertNoIrregularWhitespace: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-irregular-whitespace",
            },
        ],
    };
};
