import { ConversionError } from "../errors/conversionError";
import { convertEditorSetting } from "./convertEditorSetting";
import { EditorSettingConverter } from "./converter";
import { EditorSetting } from "./types";

describe("convertEditorSetting", () => {
    it("returns undefined when no converter exists for a setting", () => {
        // Arrange
        const converters = new Map();

        // Act
        const result = convertEditorSetting(
            {
                editorSettingName: "tslint-setting",
                value: "any value",
            },
            converters,
        );

        // Assert
        expect(result).toEqual(undefined);
    });

    it("returns converter results when the converter does not throw an error", () => {
        // Arrange
        const converted = {
            settings: [
                {
                    editorSettingName: "eslint-setting",
                    value: "new value",
                },
            ],
        };
        const converters = new Map<string, EditorSettingConverter>([
            ["tslint-setting", () => converted],
        ]);

        // Act
        const result = convertEditorSetting(
            {
                editorSettingName: "tslint-setting",
                value: "existing value",
            },
            converters,
        );

        // Assert
        expect(result).toEqual(converted);
    });

    it("returns a conversion error when the converter throws an error", () => {
        // Arrange
        const error = new Error("oh no");
        const converters = new Map<string, EditorSettingConverter>([
            [
                "tslint-setting",
                () => {
                    throw error;
                },
            ],
        ]);
        const tsLintSetting: EditorSetting = {
            editorSettingName: "tslint-setting",
            value: "existing value",
        };

        // Act
        const result = convertEditorSetting(tsLintSetting, converters);

        // Assert
        expect(result).toEqual(ConversionError.forSettingError(error, tsLintSetting));
    });
});
