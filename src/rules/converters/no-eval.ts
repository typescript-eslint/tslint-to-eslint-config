import { RuleConverter } from "../converter";

export const convertNoEval: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-eval",
            },
        ],
    };
};
