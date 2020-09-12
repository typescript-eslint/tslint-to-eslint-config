import { SansDependencies } from "../../binding";
import { findEditorConfiguration } from "../../input/findEditorConfiguration";
import { TSLintToESLintSettings, ResultWithStatus, ResultStatus } from "../../types";
import { writeEditorConfigConversionResults } from "../lintConfigs/writeEditorConfigConversionResults";
import { convertEditorSettings } from "./convertEditorSettings";
import { reportEditorSettingConversionResults } from "./reporting/reportEditorSettingConversionResults";

export type ConvertEditorConfigDependencies = {
    convertEditorSettings: SansDependencies<typeof convertEditorSettings>;
    findEditorConfiguration: SansDependencies<typeof findEditorConfiguration>;
    reportEditorSettingConversionResults: SansDependencies<
        typeof reportEditorSettingConversionResults
    >;
    writeEditorConfigConversionResults: SansDependencies<typeof writeEditorConfigConversionResults>;
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

    const fileWriteError = await dependencies.writeEditorConfigConversionResults(
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

    dependencies.reportEditorSettingConversionResults(settingConversionResults);

    return {
        status: ResultStatus.Succeeded,
    };
};
