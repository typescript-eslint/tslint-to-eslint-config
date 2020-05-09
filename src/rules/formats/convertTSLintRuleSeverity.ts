import { ESLintRuleSeverity, TSLintRuleSeverity } from "../types";

/**
 * Converts a TSLint rule severity string to the ESLint equivalent.
 */
export const convertTSLintRuleSeverity = (
    tslintSeverity: TSLintRuleSeverity,
): ESLintRuleSeverity => {
    return tslintSeverity === "warning" ? "warn" : tslintSeverity;
};
