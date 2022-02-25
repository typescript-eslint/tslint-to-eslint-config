import { RuleConverter } from "../ruleConverter.js";

export const convertNoBannedTerms: RuleConverter = () => {
    return {
        // This is mentioned in Architecture/Linters.md as a TSLint rule with two ESLint equivalents
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
