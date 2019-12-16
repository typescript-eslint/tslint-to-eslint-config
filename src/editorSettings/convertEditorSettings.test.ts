import { ConversionError } from "../errors/conversionError";
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
        const { converted, missing, failed } = convertEditorSettings(
            { converters },
            editorConfiguration,
        );

        // Assert
        expect(converted.size).toEqual(0);
        expect(missing.length).toEqual(0);
        expect(failed.length).toEqual(0);
    });

    it("skips a configuration if not an editor setting", () => {
        // Arrange
        const conversionResult: EditorSettingConversionResult = {
            settings: [
                {
                    editorSettingName: "editor.eslint-setting-a",
                    value: "a",
                },
            ],
        };

        const { editorSetting, converters } = setupConversionEnvironment(conversionResult);

        const editorConfiguration = {
            notAnEditorSetting: "a",
            [editorSetting.editorSettingName]: editorSetting,
            notAnEditorSettingEither: "b",
        };

        // Act
        const { converted, missing, failed } = convertEditorSettings(
            { converters },
            editorConfiguration,
        );

        // Assert
        expect(converted.size).toEqual(1);
        expect(missing.length).toEqual(0);
        expect(failed.length).toEqual(0);
    });

    it("marks a setting as missing when its converter returns undefined", () => {
        // Arrange
        const { editorSetting, converters } = setupConversionEnvironment();

        // Act
        const { missing } = convertEditorSettings(
            { converters },
            { [editorSetting.editorSettingName]: editorSetting },
        );

        // Assert
        expect(missing).toEqual([{ editorSettingName: editorSetting.editorSettingName }]);
    });

    it("marks a conversion as failed when returned a conversion error", () => {
        // Arrange
        const { editorSetting, converters } = setupConversionEnvironment();
        const conversionError = ConversionError.forSettingError(new Error(), editorSetting);
        converters.set(editorSetting.editorSettingName, () => conversionError);

        // Act
        const { failed } = convertEditorSettings(
            { converters },
            { [editorSetting.editorSettingName]: editorSetting },
        );

        // Assert
        expect(failed).toEqual([conversionError]);
    });

    it("marks a converted setting name as converted when a conversion has settings", () => {
        // Arrange
        const conversionResult: EditorSettingConversionResult = {
            settings: [
                {
                    editorSettingName: "editor.eslint-setting-a",
                    value: "a",
                },
            ],
        };
        const { editorSetting, converters } = setupConversionEnvironment(conversionResult);

        // Act
        const { converted } = convertEditorSettings(
            { converters },
            { [editorSetting.editorSettingName]: editorSetting.value },
        );

        // Assert
        expect(converted).toEqual(
            new Map([
                [
                    "editor.eslint-setting-a",
                    {
                        editorSettingName: "editor.eslint-setting-a",
                        value: "a",
                    },
                ],
            ]),
        );
    });
});

function setupConversionEnvironment(conversionResult?: EditorSettingConversionResult) {
    const editorSetting = createSampleEditorSetting();
    const converters = createConverters(editorSetting, conversionResult);

    return { editorSetting, converters };
}

function createSampleEditorSetting(): EditorSetting {
    return {
        editorSettingName: "editor.tslint-editor-setting-a",
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
