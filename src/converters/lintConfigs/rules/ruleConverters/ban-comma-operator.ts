import { RuleConverter } from "../ruleConverter";

export const convertBanCommaOperator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-sequences",
            },
        ],
    };
};
