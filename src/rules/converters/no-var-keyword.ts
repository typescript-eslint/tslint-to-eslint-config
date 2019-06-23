import { RuleConverter } from "../converter";

export const convertNoVarKeyword: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-var",
            },
        ],
    };
};
