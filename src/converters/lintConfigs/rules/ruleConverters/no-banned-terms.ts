import { RuleConverter } from "../ruleConverter";

export const convertNoBannedTerms: RuleConverter = () => {
    return {
        // This is mentioned in Architecture.md as a TSLint rule with two ESLint equivalents
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
