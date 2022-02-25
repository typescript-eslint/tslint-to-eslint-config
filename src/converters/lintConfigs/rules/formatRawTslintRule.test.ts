import { describe, expect, it } from "@jest/globals";

import { formatRawTslintRule } from "./formats/formatRawTslintRule.js";

describe("formatRawTslintRule", () => {
    it("supplies default values when none are provided", () => {
        // Arrange
        const ruleName = "tslint-rule";

        // Act
        const formatted = formatRawTslintRule(ruleName, {});

        // Assert
        expect(formatted).toEqual({
            ruleArguments: [],
            ruleName,
            ruleSeverity: "error",
        });
    });
});
