import { ESLintRuleSeverity, RawESLintRuleSeverity } from "../types";

export const convertRawESLintRuleSeverity = (
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
