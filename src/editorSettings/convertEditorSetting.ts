import { ConversionError } from "../errors/conversionError";
import { EditorSettingConverter, EditorSettingConversionResult } from "./converter";
import { EditorSetting } from "./types";

type ConvertEditorSetting = ConversionError | EditorSettingConversionResult | undefined;

export const convertEditorSetting = (
    editorSetting: EditorSetting,
    converters: Map<string, EditorSettingConverter>,
): ConvertEditorSetting => {
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
