import { ConversionError } from "../errors/conversionError";
import { ErrorSummary } from "../errors/errorSummary";
import { EditorSettingConverter } from "./converter";
import { convertSetting } from "./convertSetting";
import { EditorSetting } from "./types";

const EDITOR_SETTINGS_PREFIX = "editor.";

export type ConvertSettingsDependencies = {
    converters: Map<string, EditorSettingConverter>;
};

export type SettingConversionResults = {
    converted: Map<string, EditorSetting>;
    failed: ErrorSummary[];
    missing: Pick<EditorSetting, "settingName">[];
};

// The entire editor configuration of any keys and values.
export type EditorConfiguration = Record<string, any>;

export const convertSettings = (
    dependencies: ConvertSettingsDependencies,
    rawEditorConfiguration: EditorConfiguration,
): SettingConversionResults => {
    const converted = new Map<string, EditorSetting>();
    const failed: ConversionError[] = [];
    const missing: Pick<EditorSetting, "settingName">[] = [];

    for (const [configurationName, value] of Object.entries(rawEditorConfiguration)) {
        // Configurations other than editor settings will be ignored.
        // See: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin#configuration
        if (!configurationName.startsWith(EDITOR_SETTINGS_PREFIX)) {
            continue;
        }

        const editorSetting = { settingName: configurationName, value };
        const conversion = convertSetting(editorSetting, dependencies.converters);

        if (conversion === undefined) {
            const { settingName } = editorSetting;
            missing.push({ settingName });
            continue;
        }

        if (conversion instanceof ConversionError) {
            failed.push(conversion);
            continue;
        }

        for (const changes of conversion.settings) {
            converted.set(changes.settingName, { ...changes });
        }
    }

    return { converted, failed, missing };
};
