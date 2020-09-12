import { RuleConverter } from "../ruleConverter";

export const convertUseIsnan: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "use-isnan",
            },
        ],
    };
};
