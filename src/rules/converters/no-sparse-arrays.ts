import { RuleConverter } from "../converter";

export const convertNoSparseArrays: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-sparse-arrays",
            },
        ],
    };
};
