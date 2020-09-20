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
 * @see `/docs/Architecture/Editors.md` for documentation.
 */
export const convertEditorConfig = async (
    dependencies: ConvertEditorConfigDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    // 1. An existing editor configuration is read from disk.
    const configuration = await dependencies.findEditorConfiguration(settings.editor);

    // 2. If the existing configuration is not found or errored, nothing else needs to be done.
    if (configuration === undefined) {
        return {
            status: ResultStatus.Succeeded,
        };
    }
    if (configuration.result instanceof Error) {
        return {
            errors: [configuration.result],
            status: ResultStatus.Failed,
        };
    }

    // 3. Configuration settings are converted to their ESLint equivalents.
    const settingConversionResults = dependencies.convertEditorSettings(
        configuration.result,
        settings,
    );

    // 4. Those ESLint equivalents are written to the configuration file.
    const fileWriteError = await dependencies.writeEditorConfigConversionResults(
        configuration.configPath,
        settingConversionResults,
        configuration.result,
    );
    if (fileWriteError !== undefined) {
        return {
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        };
    }

    // 5. Results from converting are reported to the user.
    dependencies.reportEditorSettingConversionResults(settingConversionResults);

    return {
        status: ResultStatus.Succeeded,
    };
};
