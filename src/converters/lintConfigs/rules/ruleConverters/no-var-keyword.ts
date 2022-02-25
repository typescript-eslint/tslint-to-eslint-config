import { RuleConverter } from "../ruleConverter.js";

export const convertNoVarKeyword: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-var",
            },
        ],
    };
};
