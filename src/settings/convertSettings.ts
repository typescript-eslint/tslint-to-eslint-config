import { ConversionError } from "../errors/conversionError";
import { ErrorSummary } from "../errors/errorSummary";
import { EditorSettingConverter } from "./converter";
import { convertSetting } from "./convertSetting";
import { EditorSetting } from "./types";

export type ConvertSettingsDependencies = {
    converters: Map<string, EditorSettingConverter>;
};

export type SettingConversionResults = {
    converted: Map<string, EditorSetting>;
    failed: ErrorSummary[];
    missing: EditorSetting[];
};

export type EditorConfigurationSettings = Record<string, any>;

export const convertSettings = (
    dependencies: ConvertSettingsDependencies,
    rawEditorSettings: EditorConfigurationSettings,
): SettingConversionResults => {
    const converted = new Map<string, EditorSetting>();
    const failed: ConversionError[] = [];
    const missing: EditorSetting[] = [];

    for (const [settingName, value] of Object.entries(rawEditorSettings)) {
        const editorSetting = { settingName, value };
        const conversion = convertSetting(editorSetting, dependencies.converters);

        if (conversion === undefined) {
            missing.push(editorSetting);
            continue;
        }

        if (conversion instanceof ConversionError) {
            failed.push(conversion);
            continue;
        }

        for (const changes of conversion.settings) {
            const existingConversion = converted.get(changes.settingName);
            const newConversion = { ...changes };

            if (existingConversion === undefined) {
                converted.set(changes.settingName, newConversion);
                continue;
            }
        }
    }

    return { converted, failed, missing };
};
