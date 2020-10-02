import { Logger } from "../../../adapters/logger";
import {
    logSuccessfulConversions,
    logFailedConversions,
    logMissingConversionTarget,
} from "../../../reporting";
import { EditorSettingConversionResults } from "../convertEditorConfigs";

export type ReportEditorConfigConversionResultsDependencies = {
    logger: Logger;
};

export const reportEditorConfigConversionResults = (
    dependencies: ReportEditorConfigConversionResultsDependencies,
    editorSettingConversionResults: EditorSettingConversionResults,
) => {
    if (editorSettingConversionResults.successes.length !== 0) {
        logSuccessfulConversions(
            "editor setting",
            editorSettingConversionResults.successes,
            dependencies.logger,
        );
    }

    if (editorSettingConversionResults.failed.length !== 0) {
        logFailedConversions(editorSettingConversionResults.failed, dependencies.logger);
    }

    if (editorSettingConversionResults.missing.length !== 0) {
        logMissingConversionTarget(
            "editor setting",
            (editorSetting) => editorSetting.editorSettingName,
            editorSettingConversionResults.missing,
            dependencies.logger,
        );
    }
};
