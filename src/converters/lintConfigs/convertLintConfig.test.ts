import { describe, expect, it, jest } from "@jest/globals";

import { createStubOriginalConfigurationsData } from "../../settings.stubs.js";
import { ResultStatus } from "../../types.js";
import { createEmptyConfigConversionResults } from "./configConversionResults.stubs.js";
import { convertLintConfig, ConvertLintConfigDependencies } from "./convertLintConfig.js";

const stubSettings = {
    config: "./eslintrc.js",
};

const createStubDependencies = (
    overrides: Partial<ConvertLintConfigDependencies> = {},
): ConvertLintConfigDependencies => {
    const ruleConversionResults = createEmptyConfigConversionResults();

    return {
        createESLintConfiguration: async () => ruleConversionResults,
        fileSystem: { writeFile: jest.fn() },
        logMissingPackages: async () => undefined,
        reportConfigConversionResults: async () => undefined,
        ...overrides,
    };
};

describe("convertLintConfig", () => {
    it("returns the failure result when writing to the configuration file fails", async () => {
        // Arrange
        const fileWriteError = new Error();
        const dependencies = createStubDependencies({
            fileSystem: {
                writeFile: async () => fileWriteError,
            },
        });

        // Act
        const result = await convertLintConfig(
            dependencies,
            stubSettings,
            createStubOriginalConfigurationsData(),
            new Map<string, string[]>(),
        );

        // Assert
        expect(result).toEqual({
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        });
    });

    it("returns a successful result when all steps succeed", async () => {
        // Arrange
        const convertCommentsResult = {
            status: ResultStatus.Succeeded,
        };
        const dependencies = createStubDependencies({
            fileSystem: {
                writeFile: async () => undefined,
            },
        });

        // Act
        const result = await convertLintConfig(
            dependencies,
            stubSettings,
            createStubOriginalConfigurationsData(),
            new Map<string, string[]>(),
        );

        // Assert
        expect(result).toEqual(convertCommentsResult);
    });
});
