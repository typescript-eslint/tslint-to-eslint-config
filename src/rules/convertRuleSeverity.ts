import { ESLintRuleSeverity, TSLintRuleSeverity } from "./types";

/**
 * Converts a TSLint rule severity string to the ESLint equivalent.
 */
export const convertTSLintRuleSeverity = (
    tslintSeverity: TSLintRuleSeverity,
): ESLintRuleSeverity => {
    return tslintSeverity === "warning" ? "warn" : tslintSeverity;
};

export const convertRawESLintRuleSeverity = (
    rawSeverity: 0 | 1 | 2 | ESLintRuleSeverity,
): ESLintRuleSeverity => {
    switch (rawSeverity) {
        case 0:
            return "off";

        case 1:
            return "warn";

        case 2:
            return "error";

        default:
            return rawSeverity;
    }
};
