import { RuleConverter } from "../ruleConverter";

export const convertTypeofCompare: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "valid-typeof",
            },
        ],
    };
};
