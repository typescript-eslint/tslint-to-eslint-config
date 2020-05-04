import { createEmptyConversionResults } from "../../../conversion/conversionResults.stubs";
import { addPrettierExtensions } from "./addPrettierExtensions";

const createStubRuleConversions = (ruleName: string, ruleSeverity: "error" | "off") =>
    new Map([[ruleName, { ruleName, ruleSeverity }]]);

describe("addPrettierExtensions", () => {
    it("returns false when a matching converted rule is enabled", async () => {
        // Arrange
        const ruleConversionResults = createEmptyConversionResults({
            converted: createStubRuleConversions("max-len", "error"),
        });

        // Act
        const result = await addPrettierExtensions(ruleConversionResults);

        // Assert
        expect(result).toEqual(false);
    });

    it("returns true when a matching converted rule is disabled", async () => {
        // Arrange
        const ruleConversionResults = createEmptyConversionResults({
            converted: createStubRuleConversions("max-len", "off"),
        });

        // Act
        const result = await addPrettierExtensions(ruleConversionResults);

        // Assert
        expect(result).toEqual(true);
    });

    it("returns true when there are no matching converted rules", async () => {
        // Arrange
        const ruleConversionResults = createEmptyConversionResults({
            converted: createStubRuleConversions("unknown", "error"),
        });

        // Act
        const result = await addPrettierExtensions(ruleConversionResults);

        // Assert
        expect(result).toEqual(true);
    });

    it("returns true when prettier is requested", async () => {
        // Arrange
        const ruleConversionResults = createEmptyConversionResults({
            converted: createStubRuleConversions("max-len", "off"),
        });

        // Act
        const result = await addPrettierExtensions(ruleConversionResults, true);

        // Assert
        expect(result).toEqual(true);
    });
});
