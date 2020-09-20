import { RuleConverter } from "../ruleConverter";

export const convertNoSparseArrays: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-sparse-arrays",
            },
        ],
    };
};
