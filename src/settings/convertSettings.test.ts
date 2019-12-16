import { ConversionError } from "../errors/conversionError";
import { convertSettings } from "./convertSettings";
import { EditorSetting } from "./types";
import { EditorSettingConverter, EditorSettingConversionResult } from "./converter";

describe("convertSettings", () => {
    it("skips entire conversion if none of the configurations is an editor setting", () => {
        // Arrange
        const { converters } = setupConversionEnvironment();

        const editorConfiguration = {
            notAnEditorSetting: "a",
        };

        // Act
        const { converted, missing, failed } = convertSettings({ converters }, editorConfiguration);

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
                    settingName: "editor.eslint-setting-a",
                    value: "a",
                },
            ],
        };

        const { editorSetting, converters } = setupConversionEnvironment(conversionResult);

        const editorConfiguration = {
            notAnEditorSetting: "a",
            [editorSetting.settingName]: editorSetting,
            notAnEditorSettingEither: "b",
        };

        // Act
        const { converted, missing, failed } = convertSettings({ converters }, editorConfiguration);

        // Assert
        expect(converted.size).toEqual(1);
        expect(missing.length).toEqual(0);
        expect(failed.length).toEqual(0);
    });

    it("marks a setting as missing when its converter returns undefined", () => {
        // Arrange
        const { editorSetting, converters } = setupConversionEnvironment();

        // Act
        const { missing } = convertSettings(
            { converters },
            { [editorSetting.settingName]: editorSetting },
        );

        // Assert
        expect(missing).toEqual([{ settingName: editorSetting.settingName }]);
    });

    it("marks a conversion as failed when returned a conversion error", () => {
        // Arrange
        const { editorSetting, converters } = setupConversionEnvironment();
        const conversionError = ConversionError.forSettingError(new Error(), editorSetting);
        converters.set(editorSetting.settingName, () => conversionError);

        // Act
        const { failed } = convertSettings(
            { converters },
            { [editorSetting.settingName]: editorSetting },
        );

        // Assert
        expect(failed).toEqual([conversionError]);
    });

    it("marks a converted setting name as converted when a conversion has settings", () => {
        // Arrange
        const conversionResult: EditorSettingConversionResult = {
            settings: [
                {
                    settingName: "editor.eslint-setting-a",
                    value: "a",
                },
            ],
        };
        const { editorSetting, converters } = setupConversionEnvironment(conversionResult);

        // Act
        const { converted } = convertSettings(
            { converters },
            { [editorSetting.settingName]: editorSetting.value },
        );

        // Assert
        expect(converted).toEqual(
            new Map([
                [
                    "editor.tslint-setting-a",
                    {
                        settingName: "editor.eslint-setting-a",
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
        settingName: "editor.tslint-setting-a",
        value: "a",
    };
}

function createConverters(
    tslintSetting: EditorSetting,
    conversionResult?: EditorSettingConversionResult,
): Map<string, EditorSettingConverter> {
    const converters = new Map<string, EditorSettingConverter>();

    if (conversionResult !== undefined) {
        converters.set(tslintSetting.settingName, () => conversionResult);
    }

    return converters;
}
