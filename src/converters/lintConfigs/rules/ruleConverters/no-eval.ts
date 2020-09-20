import { RuleConverter } from "../ruleConverter";

export const convertNoEval: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-eval",
            },
        ],
    };
};
