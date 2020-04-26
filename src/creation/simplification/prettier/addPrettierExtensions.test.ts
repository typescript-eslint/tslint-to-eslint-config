import { createEmptyConversionResults } from "../../../conversion/conversionResults.stubs";
import { addPrettierExtensions } from "./addPrettierExtensions";

describe("addPrettierExtensions", () => {
    it("returns false when a matching converted rule is enabled", async () => {
        // Arrange
        const ruleConversionResults = createEmptyConversionResults({
            converted: new Map([
                [
                    "max-len",
                    {
                        ruleName: "max-len",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        });

        // Act
        const result = await addPrettierExtensions(ruleConversionResults);

        // Assert
        expect(result).toEqual(false);
    });

    it("returns true when a matching converted rule is disabled", async () => {
        // Arrange
        const ruleConversionResults = createEmptyConversionResults({
            converted: new Map([
                [
                    "max-len",
                    {
                        ruleName: "max-len",
                        ruleSeverity: "off",
                    },
                ],
            ]),
        });

        // Act
        const result = await addPrettierExtensions(ruleConversionResults);

        // Assert
        expect(result).toEqual(true);
    });

    it("returns true when there are no matching converted rules", async () => {
        // Arrange
        const ruleConversionResults = createEmptyConversionResults({
            converted: new Map([
                [
                    "unknown",
                    {
                        ruleName: "unknown",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        });

        // Act
        const result = await addPrettierExtensions(ruleConversionResults);

        // Assert
        expect(result).toEqual(true);
    });

    it("returns true when prettier is requested", async () => {
        // Arrange
        const ruleConversionResults = createEmptyConversionResults({
            converted: new Map([
                [
                    "max-len",
                    {
                        ruleName: "max-len",
                        ruleSeverity: "off",
                    },
                ],
            ]),
        });

        // Act
        const result = await addPrettierExtensions(ruleConversionResults, true);

        // Assert
        expect(result).toEqual(true);
    });
});
