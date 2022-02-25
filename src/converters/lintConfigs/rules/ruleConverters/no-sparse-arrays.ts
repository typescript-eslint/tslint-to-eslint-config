import { RuleConverter } from "../ruleConverter.js";

export const convertNoSparseArrays: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-sparse-arrays",
            },
        ],
    };
};
