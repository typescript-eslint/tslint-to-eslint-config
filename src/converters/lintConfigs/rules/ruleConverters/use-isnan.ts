import { RuleConverter } from "../ruleConverter.js";

export const convertUseIsnan: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "use-isnan",
            },
        ],
    };
};
