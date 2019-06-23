import { RuleConverter } from "../converter";

export const convertBanCommaOperator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-sequences",
            },
        ],
    };
};
