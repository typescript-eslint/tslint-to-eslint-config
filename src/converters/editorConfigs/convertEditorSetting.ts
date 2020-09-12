import { ConversionError } from "../../errors/conversionError";
import { TSLintToESLintSettings } from "../../types";
import { EditorSettingConverter } from "./converter";
import { EditorSetting } from "./types";

export const convertEditorSetting = (
    editorSetting: EditorSetting,
    converters: Map<string, EditorSettingConverter>,
    settings: TSLintToESLintSettings,
) => {
    const converter = converters.get(editorSetting.editorSettingName);
    if (converter === undefined) {
        return undefined;
    }

    try {
        return converter(editorSetting, settings);
    } catch (error) {
        return ConversionError.forSettingError(error, editorSetting);
    }
};
