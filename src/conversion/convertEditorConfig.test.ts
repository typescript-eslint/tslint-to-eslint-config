import { EditorSetting } from "../editorSettings/types";
import { createStubTSLintToESLintSettings } from "../settings.stubs";
import { FailedResult, ResultStatus } from "../types";
import { createEmptySettingConversionResults } from "./conversionResults.stubs";
import { convertEditorConfig, ConvertEditorConfigDependencies } from "./convertEditorConfig";

const stubSettings = {
    config: "./eslintrc.js",
    editor: "./my-editor/settings.json",
};

const createStubDependencies = (
    overrides: Partial<ConvertEditorConfigDependencies> = {},
): ConvertEditorConfigDependencies => ({
    convertEditorSettings: jest.fn(),
    findEditorConfiguration: jest.fn().mockResolvedValue({}),
    reportConversionResults: jest.fn(),
    writeConversionResults: jest.fn().mockReturnValue(Promise.resolve()),
    ...overrides,
});

describe("convertEditorConfig", () => {
    it("returns a success result when there is no original configuration", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            findEditorConfiguration: async () => undefined,
        });

        // Act
        const result = await convertEditorConfig(dependencies, stubSettings);

        // Assert
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });

    it("returns the failure result when finding the original configurations fails", async () => {
        // Arrange
        const error = new Error();
        const findError: FailedResult = {
            errors: [error],
            status: ResultStatus.Failed,
        };

        const dependencies = createStubDependencies({
            findEditorConfiguration: async () => ({
                configPath: "",
                result: error,
            }),
        });

        // Act
        const result = await convertEditorConfig(dependencies, stubSettings);

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
        const result = await convertEditorConfig(dependencies, stubSettings);

        // Assert
        expect(result).toEqual({
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        });
    });

    it("converts conversion results when finding the original configurations succeeds", async () => {
        // Arrange
        const originalConfig = {
            "typescript.tsdk": "node_modules/typescript/lib",
        };

        const dependencies = createStubDependencies({
            findEditorConfiguration: jest.fn().mockResolvedValue({
                result: originalConfig,
            }),
        });

        // Act
        await convertEditorConfig(dependencies, stubSettings);

        // Assert
        expect(dependencies.convertEditorSettings).toHaveBeenCalledWith(
            originalConfig,
            createStubTSLintToESLintSettings(),
        );
    });

    it("reports conversion results when settings are converted successfully", async () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
            converted: new Map<string, EditorSetting>([
                [
                    "tslint-editor-setting-one",
                    {
                        editorSettingName: "tslint-editor-setting-one",
                        value: 42,
                    },
                ],
            ]),
        });

        const dependencies = createStubDependencies({
            convertEditorSettings: jest.fn().mockReturnValue(conversionResults),
        });

        // Act
        await convertEditorConfig(dependencies, stubSettings);

        // Assert
        expect(dependencies.reportConversionResults).toHaveBeenCalledWith(conversionResults);
    });

    it("returns a successful result when finding the original configurations succeeds", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await convertEditorConfig(dependencies, stubSettings);

        // Assert
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });
});
