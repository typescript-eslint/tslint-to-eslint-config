import { describe, expect, it } from "@jest/globals";

import { createEmptyConfigConversionResults } from "../../configConversionResults.stubs.js";
import { checkPrettierExtension } from "./checkPrettierExtension.js";

const createStubRuleConversions = (ruleName: string, ruleSeverity: "error" | "off") =>
    new Map([[ruleName, { ruleName, ruleSeverity }]]);

describe("checkPrettierExtension", () => {
    it("returns false when a matching converted rule is enabled", () => {
        // Arrange
        const ruleConversionResults = createEmptyConfigConversionResults({
            converted: createStubRuleConversions("max-len", "error"),
        });

        // Act
        const result = checkPrettierExtension(ruleConversionResults);

        // Assert
        expect(result).toEqual(false);
    });

    it("returns true when a matching converted rule is disabled", () => {
        // Arrange
        const ruleConversionResults = createEmptyConfigConversionResults({
            converted: createStubRuleConversions("max-len", "off"),
        });

        // Act
        const result = checkPrettierExtension(ruleConversionResults);

        // Assert
        expect(result).toEqual(true);
    });

    it("returns true when there are no matching converted rules", () => {
        // Arrange
        const ruleConversionResults = createEmptyConfigConversionResults({
            converted: createStubRuleConversions("unknown", "error"),
        });

        // Act
        const result = checkPrettierExtension(ruleConversionResults);

        // Assert
        expect(result).toEqual(true);
    });

    it("returns true when prettier is requested", () => {
        // Arrange
        const ruleConversionResults = createEmptyConfigConversionResults({
            converted: createStubRuleConversions("max-len", "off"),
        });

        // Act
        const result = checkPrettierExtension(ruleConversionResults, true);

        // Assert
        expect(result).toEqual(true);
    });
});
