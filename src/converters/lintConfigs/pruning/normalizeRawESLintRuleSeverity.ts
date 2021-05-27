import { ESLintRuleSeverity,RawESLintRuleSeverity } from "../rules/types";

export const normalizeRawESLintRuleSeverity = (
    rawSeverity: RawESLintRuleSeverity,
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
