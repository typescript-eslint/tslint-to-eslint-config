import { FileSystem } from "../adapters/fileSystem";
import { SansDependencies } from "../binding";
import {
    DEFAULT_VSCODE_SETTINGS_PATH,
    findEditorConfiguration,
} from "../input/findEditorConfiguration";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../types";
import { convertSettings } from "../settings/convertSettings";
import { writeConversionResults } from "../creation/writeEditorConfigConversionResults";

export type ConvertEditorConfigDependencies = {
    convertSettings: SansDependencies<typeof convertSettings>;
    findEditorConfiguration: SansDependencies<typeof findEditorConfiguration>;
    fileSystem: Pick<FileSystem, "writeFile">;
    writeConversionResults: SansDependencies<typeof writeConversionResults>;
};

/**
 * Root-level driver to convert an editor configuration.
 */
export const convertEditorConfig = async (
    dependencies: ConvertEditorConfigDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    const originalEditorConfiguration = await dependencies.findEditorConfiguration(settings.editor);
    if (originalEditorConfiguration instanceof Error) {
        return {
            errors: [originalEditorConfiguration],
            status: ResultStatus.Failed,
        };
    }

    const settingConversionResults = dependencies.convertSettings(originalEditorConfiguration);

    const outputPath = settings.editor ? settings.editor : DEFAULT_VSCODE_SETTINGS_PATH;
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

    // TODO: devinmotion: A summary of the results may be printed to the user's console?

    return {
        status: ResultStatus.Succeeded,
    };
};
