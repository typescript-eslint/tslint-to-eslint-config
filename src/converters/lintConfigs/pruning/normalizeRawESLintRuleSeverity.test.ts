import { describe, expect, it } from "@jest/globals";

import { normalizeRawESLintRuleSeverity } from "./normalizeRawESLintRuleSeverity";

describe("normalizeRawESLintRuleSeverity", () => {
    it("converts the severity to off when equal to 0", () => {
        // Arrange
        const rawSeverity = 0;

        // Act
        const result = normalizeRawESLintRuleSeverity(rawSeverity);

        // Assert
        expect(result).toEqual("off");
    });

    it("converts the severity to warn when equal to 1", () => {
        // Arrange
        const rawSeverity = 1;

        // Act
        const result = normalizeRawESLintRuleSeverity(rawSeverity);

        // Assert
        expect(result).toEqual("warn");
    });

    it("converts the severity to error when equal to 2", () => {
        // Arrange
        const rawSeverity = 2;

        // Act
        const result = normalizeRawESLintRuleSeverity(rawSeverity);

        // Assert
        expect(result).toEqual("error");
    });

    it("returns the same severity when already a string", () => {
        // Arrange
        const rawSeverity = "error";

        // Act
        const result = normalizeRawESLintRuleSeverity(rawSeverity);

        // Assert
        expect(result).toEqual(rawSeverity);
    });
});
