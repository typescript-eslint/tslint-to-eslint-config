import { EOL } from "os";

import { Logger } from "../adapters/logger";
import { EditorSettingConversionResults } from "../editorSettings/convertEditorSettings";
import { EditorSetting } from "../editorSettings/types";
import {
    logFailedConversions,
    logMissingConversionTarget,
    logSuccessfulConversions,
} from "./reportOutputs";

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
