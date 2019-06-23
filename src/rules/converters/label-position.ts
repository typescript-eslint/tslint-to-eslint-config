import { RuleConverter } from "../converter";

export const convertLabelPosition: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-unused-labels",
            },
        ],
    };
};
