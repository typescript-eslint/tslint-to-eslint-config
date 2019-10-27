import { ConversionError } from "../errors/conversionError";
import { EditorSettingConverter } from "./converter";
import { EditorSetting } from "./types";

export const convertSetting = (
    editorSetting: EditorSetting,
    converters: Map<string, EditorSettingConverter>,
) => {
    const converter = converters.get(editorSetting.settingName);
    if (converter === undefined) {
        return undefined;
    }

    try {
        return converter(editorSetting);
    } catch (error) {
        return ConversionError.forSettingError(error, editorSetting);
    }
};
