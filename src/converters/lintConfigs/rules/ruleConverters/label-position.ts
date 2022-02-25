import { RuleConverter } from "../ruleConverter.js";

export const convertLabelPosition: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-unused-labels",
            },
        ],
    };
};
