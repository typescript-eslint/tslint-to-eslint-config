import { ConversionError } from "../errors/conversionError";
import { convertSettings } from "./convertSettings";
import { EditorSetting } from "./types";
import { EditorSettingConverter, EditorSettingConversionResult } from "./converter";

describe("convertSettings", () => {
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
                    settingName: "eslint-setting-a",
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
                    "tslint-setting-a",
                    {
                        settingName: "eslint-setting-a",
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
        settingName: "tslint-setting-a",
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
