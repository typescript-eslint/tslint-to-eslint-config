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
        convertRules: jest.fn(),
        reportConfigConversionResults: jest.fn(),
        summarizePackageRules: async (_configurations, data) => ({
            ...ruleConversionResults,
            ...data,
        }),
        logMissingPackages: jest.fn().mockReturnValue(Promise.resolve()),
        writeConfigConversionResults: jest.fn().mockReturnValue(Promise.resolve()),
        ...overrides,
    };
};

describe("convertLintConfig", () => {
    it("returns the failure result when writing to the configuration file fails", async () => {
        // Arrange
        const fileWriteError = new Error();
        const dependencies = createStubDependencies({
            writeConfigConversionResults: jest.fn().mockResolvedValueOnce(fileWriteError),
        });

        // Act
        const result = await convertLintConfig(
            dependencies,
            stubSettings,
            createStubOriginalConfigurationsData(),
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
        const dependencies = createStubDependencies();

        // Act
        const result = await convertLintConfig(
            dependencies,
            stubSettings,
            createStubOriginalConfigurationsData(),
        );

        // Assert
        expect(result).toEqual(convertCommentsResult);
    });
});
