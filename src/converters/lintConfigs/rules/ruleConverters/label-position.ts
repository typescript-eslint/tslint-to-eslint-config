import { RuleConverter } from "../ruleConverter";

export const convertLabelPosition: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-unused-labels",
            },
        ],
    };
};
