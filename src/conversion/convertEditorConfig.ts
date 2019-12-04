import { SansDependencies } from "../binding";
import { writeConversionResults } from "../creation/writeEditorConfigConversionResults";
import { findEditorConfiguration } from "../input/findEditorConfiguration";
import { DEFAULT_VSCODE_SETTINGS_PATH } from "../input/vsCodeSettings";
import { reportSettingConversionResults } from "../reporting/reportSettingConversionResults";
import { convertSettings } from "../settings/convertSettings";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../types";

export type ConvertEditorConfigDependencies = {
    convertSettings: SansDependencies<typeof convertSettings>;
    findEditorConfiguration: SansDependencies<typeof findEditorConfiguration>;
    reportConversionResults: SansDependencies<typeof reportSettingConversionResults>;
    writeConversionResults: SansDependencies<typeof writeConversionResults>;
};

/**
 * Root-level driver to convert an editor configuration.
 */
export const convertEditorConfig = async (
    dependencies: ConvertEditorConfigDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    const editorConfigPath = settings.editor ? settings.editor : DEFAULT_VSCODE_SETTINGS_PATH;
    const originalEditorConfiguration = await dependencies.findEditorConfiguration(
        editorConfigPath,
    );
    if (originalEditorConfiguration instanceof Error) {
        return {
            errors: [originalEditorConfiguration],
            status: ResultStatus.Failed,
        };
    }

    const settingConversionResults = dependencies.convertSettings(originalEditorConfiguration);

    const outputPath = editorConfigPath;
    const fileWriteError = await dependencies.writeConversionResults(
        outputPath,
        settingConversionResults,
        originalEditorConfiguration,
    );
    if (fileWriteError !== undefined) {
        return {
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        };
    }

    dependencies.reportConversionResults(settingConversionResults);

    return {
        status: ResultStatus.Succeeded,
    };
};
