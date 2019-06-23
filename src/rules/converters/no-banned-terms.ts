import { RuleConverter } from "../converter";

export const convertNoBannedTerms: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-caller",
            },
            {
                ruleName: "no-eval",
            },
        ],
    };
};
