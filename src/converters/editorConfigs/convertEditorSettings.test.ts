import { ConversionError } from "../../errors/conversionError";
import { createStubTSLintToESLintSettings } from "../../settings.stubs";
import { convertEditorSettings } from "./convertEditorSettings";
import { EditorSettingConversionResult, EditorSettingConverter } from "./converter";
import { EditorSetting } from "./types";

describe("convertEditorSettings", () => {
    it("skips entire conversion if none of the configurations is an editor setting", () => {
        // Arrange
        const { converters } = setupConversionEnvironment();

        const editorConfiguration = {
            notAnEditorSetting: "a",
        };

        // Act
        const result = convertEditorSettings(
            { converters },
            editorConfiguration,
            createStubTSLintToESLintSettings(),
        );

        // Assert
        expect(result).toEqual({
            converted: new Map(),
            failed: [],
            missing: [],
        });
    });

    it("skips a configuration if not an editor setting", () => {
        // Arrange
        const { editorSetting, converters } = setupConversionEnvironment({
            settings: [
                {
                    editorSettingName: "editor.eslint-setting-a",
                    value: "a",
                },
            ],
        });

        const editorConfiguration = {
            notAnEditorSetting: "a",
            [editorSetting.editorSettingName]: editorSetting,
            notAnEditorSettingEither: "b",
        };

        // Act
        const result = convertEditorSettings(
            { converters },
            editorConfiguration,
            createStubTSLintToESLintSettings(),
        );

        // Assert
        expect(result).toEqual({
            converted: new Map([
                [
                    "editor.eslint-setting-a",
                    {
                        editorSettingName: "editor.eslint-setting-a",
                        value: "a",
                    },
                ],
            ]),
            failed: [],
            missing: [],
        });
    });

    it("marks a setting as missing when its converter returns undefined", () => {
        // Arrange
        const { editorSetting, converters } = setupConversionEnvironment();

        // Act
        const result = convertEditorSettings(
            { converters },
            { [editorSetting.editorSettingName]: editorSetting },
            createStubTSLintToESLintSettings(),
        );

        // Assert
        expect(result).toEqual({
            converted: new Map(),
            failed: [],
            missing: [{ editorSettingName: editorSetting.editorSettingName }],
        });
    });

    it("marks a conversion as failed when returned a conversion error", () => {
        // Arrange
        const { editorSetting, converters } = setupConversionEnvironment();
        const conversionError = ConversionError.forSettingError(new Error(), editorSetting);
        converters.set(editorSetting.editorSettingName, () => conversionError);

        // Act
        const result = convertEditorSettings(
            { converters },
            { [editorSetting.editorSettingName]: editorSetting },
            createStubTSLintToESLintSettings(),
        );

        // Assert
        expect(result).toEqual({
            converted: new Map(),
            failed: [conversionError],
            missing: [],
        });
    });

    it("marks a converted setting name as converted when a conversion has settings", () => {
        // Arrange
        const { editorSetting, converters } = setupConversionEnvironment({
            settings: [
                {
                    editorSettingName: "eslint.configFile",
                    value: "a",
                },
            ],
        });

        // Act
        const result = convertEditorSettings(
            { converters },
            { [editorSetting.editorSettingName]: editorSetting.value },
            createStubTSLintToESLintSettings(),
        );

        // Assert
        expect(result).toEqual({
            converted: new Map([
                [
                    "eslint.configFile",
                    {
                        editorSettingName: "eslint.configFile",
                        value: "a",
                    },
                ],
            ]),
            failed: [],
            missing: [],
        });
    });
});

function setupConversionEnvironment(conversionResult?: EditorSettingConversionResult) {
    const editorSetting = createSampleEditorSetting();
    const converters = createConverters(editorSetting, conversionResult);

    return { editorSetting, converters };
}

function createSampleEditorSetting(): EditorSetting {
    return {
        editorSettingName: "tslint.configFile",
        value: "a",
    };
}

function createConverters(
    tslintSetting: EditorSetting,
    conversionResult?: EditorSettingConversionResult,
): Map<string, EditorSettingConverter> {
    const converters = new Map<string, EditorSettingConverter>();

    if (conversionResult !== undefined) {
        converters.set(tslintSetting.editorSettingName, () => conversionResult);
    }

    return converters;
}
