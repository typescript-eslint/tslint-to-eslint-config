import { ResultStatus, FailedResult } from "../types";
import { convertLintConfig, ConvertLintConfigDependencies } from "./convertLintConfig";

const stubSettings = {
    config: "./eslintrc.js",
};

const createStubDependencies = (
    overrides: Partial<ConvertLintConfigDependencies> = {},
): ConvertLintConfigDependencies => ({
    convertComments: jest.fn(),
    convertRules: jest.fn(),
    findOriginalConfigurations: jest.fn().mockResolvedValue({
        data: createStubOriginalConfigurationsData(),
        status: ResultStatus.Succeeded,
    }),
    reportCommentResults: jest.fn(),
    reportConversionResults: jest.fn(),
    summarizePackageRules: async (_configurations, data) => ({
        ...data,
        converted: new Map(),
        extends: [],
        extensionRules: new Map(),
        failed: [],
        missing: [],
        plugins: new Set(),
    }),
    logMissingPackages: jest.fn().mockReturnValue(Promise.resolve()),
    writeConversionResults: jest.fn().mockReturnValue(Promise.resolve()),
    ...overrides,
});

const createStubOriginalConfigurationsData = () => ({
    tslint: {
        full: {
            rules: [],
            rulesDirectory: [],
        },
        raw: {},
    },
});

describe("convertLintConfig", () => {
    it("returns the failure result when finding the original configurations fails", async () => {
        // Arrange
        const findError: FailedResult = {
            errors: [],
            status: ResultStatus.Failed,
        };
        const dependencies = createStubDependencies({
            findOriginalConfigurations: async () => findError,
        });

        // Act
        const result = await convertLintConfig(dependencies, stubSettings);

        // Assert
        expect(result).toEqual(findError);
    });

    it("returns the failure result when writing to the configuration file fails", async () => {
        // Arrange
        const fileWriteError = new Error();
        const dependencies = createStubDependencies({
            writeConversionResults: jest.fn().mockResolvedValueOnce(fileWriteError),
        });

        // Act
        const result = await convertLintConfig(dependencies, stubSettings);

        // Assert
        expect(result).toEqual({
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        });
    });

    it("returns the failure result when converting comments fails", async () => {
        // Arrange
        const convertCommentsResult = {
            errors: [new Error()],
            status: ResultStatus.Failed,
        };
        const dependencies = createStubDependencies({
            convertComments: jest.fn().mockResolvedValueOnce(convertCommentsResult),
        });

        // Act
        const result = await convertLintConfig(dependencies, stubSettings);

        // Assert
        expect(result).toEqual(convertCommentsResult);
    });

    it("returns a successful result when all steps succeed", async () => {
        // Arrange
        const convertCommentsResult = {
            status: ResultStatus.Succeeded,
        };
        const dependencies = createStubDependencies({
            convertComments: jest.fn().mockResolvedValueOnce(convertCommentsResult),
        });

        // Act
        const result = await convertLintConfig(dependencies, stubSettings);

        // Assert
        expect(result).toEqual(convertCommentsResult);
    });
});
