import { EOL } from "os";

import { EditorSettingConversionResults } from "../editorSettings/convertEditorSettings";
import { EditorSetting } from "../editorSettings/types";
import { ReportDependencies } from "./dependencies";
import {
    logFailedConversions,
    logMissingConversionTarget,
    logSuccessfulConversions,
} from "./reportOutputs";

export const reportEditorSettingConversionResults = (
    dependencies: ReportDependencies,
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
        ) =>
            `tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "${editorSetting.editorSettingName}"${EOL}`;
        logMissingConversionTarget(
            "editor setting",
            missingEditorSettingOutputMapping,
            editorSettingConversionResults.missing,
            dependencies.logger,
        );
    }
};
