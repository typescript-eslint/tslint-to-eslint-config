import { RuleConverter } from "../ruleConverter";

export const convertNoVarKeyword: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-var",
            },
        ],
    };
};
