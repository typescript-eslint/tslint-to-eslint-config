import { SansDependencies } from "../binding";
import { writeConversionResults } from "../creation/writeEditorConfigConversionResults";
import { convertEditorSettings } from "../editorSettings/convertEditorSettings";
import { findEditorConfiguration } from "../input/findEditorConfiguration";
import { reportEditorSettingConversionResults } from "../reporting/reportEditorSettingConversionResults";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../types";

export type ConvertEditorConfigDependencies = {
    convertEditorSettings: SansDependencies<typeof convertEditorSettings>;
    findEditorConfiguration: SansDependencies<typeof findEditorConfiguration>;
    reportConversionResults: SansDependencies<typeof reportEditorSettingConversionResults>;
    writeConversionResults: SansDependencies<typeof writeConversionResults>;
};

/**
 * Root-level driver to convert an editor configuration.
 */
export const convertEditorConfig = async (
    dependencies: ConvertEditorConfigDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    const conversion = await dependencies.findEditorConfiguration(settings.editor);
    if (conversion === undefined) {
        return {
            status: ResultStatus.Succeeded,
        };
    }

    if (conversion.result instanceof Error) {
        return {
            errors: [conversion.result],
            status: ResultStatus.Failed,
        };
    }

    const settingConversionResults = dependencies.convertEditorSettings(
        conversion.result,
        settings,
    );

    const fileWriteError = await dependencies.writeConversionResults(
        conversion.configPath,
        settingConversionResults,
        conversion.result,
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
