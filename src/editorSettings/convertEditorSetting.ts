import { ConversionError } from "../errors/conversionError";
import { EditorSettingConverter } from "./converter";
import { EditorSetting } from "./types";

export const convertEditorSetting = (
    editorSetting: EditorSetting,
    converters: Map<string, EditorSettingConverter>,
) => {
    const converter = converters.get(editorSetting.editorSettingName);
    if (converter === undefined) {
        return undefined;
    }

    try {
        return converter(editorSetting);
    } catch (error) {
        return ConversionError.forSettingError(error, editorSetting);
    }
};
