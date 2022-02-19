import { jest } from "@jest/globals";

import { createStubOriginalConfigurationsData } from "../../settings.stubs";
import { ResultStatus } from "../../types";
import { createEmptyConfigConversionResults } from "./configConversionResults.stubs";
import { convertLintConfig, ConvertLintConfigDependencies } from "./convertLintConfig";

const stubSettings = {
    config: "./eslintrc.js",
};

const createStubDependencies = (
    overrides: Partial<ConvertLintConfigDependencies> = {},
): ConvertLintConfigDependencies => {
    const ruleConversionResults = createEmptyConfigConversionResults();

    return {
        createESLintConfiguration: jest.fn().mockResolvedValue(ruleConversionResults),
        fileSystem: { writeFile: jest.fn() },
        logMissingPackages: jest.fn().mockResolvedValue(undefined),
        reportConfigConversionResults: jest.fn().mockResolvedValue(undefined),
        ...overrides,
    };
};

describe("convertLintConfig", () => {
    it("returns the failure result when writing to the configuration file fails", async () => {
        // Arrange
        const fileWriteError = new Error();
        const dependencies = createStubDependencies({
            fileSystem: {
                writeFile: jest.fn().mockResolvedValue(fileWriteError),
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
                writeFile: jest.fn().mockResolvedValue(undefined),
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
