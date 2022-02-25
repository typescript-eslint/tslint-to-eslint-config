import { describe, expect, it } from "@jest/globals";

import { createStubOriginalConfigurationsData } from "../../settings.stubs.js";
import { createEmptyConfigConversionResults } from "./configConversionResults.stubs.js";
import { createESLintConfiguration } from "./createESLintConfiguration.js";

describe("createESLintConfiguration", () => {
    it("returns the result of summarizing package rules", async () => {
        // Arrange
        const summarizedResults = createEmptyConfigConversionResults();
        const dependencies = {
            convertRules: () => summarizedResults,
            summarizePackageRules: async () => summarizedResults,
        };
        const originalConfigurations = createStubOriginalConfigurationsData();

        // Act
        const result = await createESLintConfiguration(
            dependencies,
            originalConfigurations,
            true,
            new Map<string, string[]>(),
        );

        // Assert
        expect(result).toEqual(summarizedResults);
    });
});
