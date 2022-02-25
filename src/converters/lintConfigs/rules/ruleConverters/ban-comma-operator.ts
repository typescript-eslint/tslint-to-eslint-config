import { RuleConverter } from "../ruleConverter.js";

export const convertBanCommaOperator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-sequences",
            },
        ],
    };
};
