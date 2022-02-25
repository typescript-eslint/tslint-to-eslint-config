import { RuleConverter } from "../ruleConverter.js";

export const convertTypeofCompare: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "valid-typeof",
            },
        ],
    };
};
