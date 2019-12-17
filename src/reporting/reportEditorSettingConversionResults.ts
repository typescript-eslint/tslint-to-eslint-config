import { EOL } from "os";

import { EditorSettingConversionResults } from "../editorSettings/convertEditorSettings";
import { EditorSetting } from "../editorSettings/types";
import { ReportConversionResultsDependencies } from "./dependencies";
import {
    logFailedConversions,
    logMissingConversionTarget,
    logSuccessfulConversions,
} from "./reportOutputs";

export const reportEditorSettingConversionResults = (
    dependencies: ReportConversionResultsDependencies,
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
        const missingEditorSettingOutputMapping = (
            editorSetting: Pick<EditorSetting, "editorSettingName">,
        ) => `${editorSetting.editorSettingName} does not yet have an ESLint equivalent.${EOL}`;
        logMissingConversionTarget(
            "editor setting",
            missingEditorSettingOutputMapping,
            editorSettingConversionResults.missing,
            dependencies.logger,
        );
    }
};
