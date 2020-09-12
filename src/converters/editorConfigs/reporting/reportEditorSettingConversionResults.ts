import { Logger } from "../../../adapters/logger";
import {
    logSuccessfulConversions,
    logFailedConversions,
    logMissingConversionTarget,
} from "../../../reporting";
import { EditorSettingConversionResults } from "../convertEditorSettings";

export type ReportEditorSettingConversionResultsDependencies = {
    logger: Logger;
};

export const reportEditorSettingConversionResults = (
    dependencies: ReportEditorSettingConversionResultsDependencies,
    editorSettingConversionResults: EditorSettingConversionResults,
) => {
    if (editorSettingConversionResults.converted.size !== 0) {
        logSuccessfulConversions(
            "editor setting",
            editorSettingConversionResults.converted,
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
