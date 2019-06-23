import { RuleConverter } from "../converter";

export const convertTypeofCompare: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "valid-typeof",
            },
        ],
    };
};
