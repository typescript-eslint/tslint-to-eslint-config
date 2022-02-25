import { RuleConverter } from "../ruleConverter.js";

export const convertNoEval: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-eval",
            },
        ],
    };
};
