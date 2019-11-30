import { ConversionError } from "../errors/conversionError";
import { EditorSettingConverter } from "./converter";
import { convertSetting } from "./convertSetting";
import { EditorSetting } from "./types";

describe("convertSetting", () => {
    it("returns undefined when no converter exists for a setting", () => {
        // Arrange
        const converters = new Map();

        // Act
        const result = convertSetting(
            {
                settingName: "tslint-setting",
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
                    settingName: "eslint-setting",
                    value: "new value",
                },
            ],
        };
        const converters = new Map<string, EditorSettingConverter>([
            ["tslint-setting", () => converted],
        ]);

        // Act
        const result = convertSetting(
            {
                settingName: "tslint-setting",
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
            settingName: "tslint-setting",
            value: "existing value",
        };

        // Act
        const result = convertSetting(tsLintSetting, converters);

        // Assert
        expect(result).toEqual(ConversionError.forSettingError(error, tsLintSetting));
    });
});
