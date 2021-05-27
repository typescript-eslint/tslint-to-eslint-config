import { Logger } from "../../../adapters/logger";
import {
    logFailedConversions,
    logMissingConversionTarget,
    logSuccessfulConversions,
} from "../../../reporting";
import { EditorConfigsConversionResults } from "../types";

export type ReportEditorConfigConversionResultsDependencies = {
    logger: Logger;
};

export const reportEditorConfigConversionResults = (
    dependencies: ReportEditorConfigConversionResultsDependencies,
    results: EditorConfigsConversionResults,
) => {
    if (results.successes.size !== 0) {
        logSuccessfulConversions(
            "editor file",
            "augmented",
            results.successes.size,
            dependencies.logger,
        );

        for (const [filePath, success] of results.successes) {
            if (success.missing.length) {
                logMissingConversionTarget(
                    `${filePath} editor setting`,
                    (editorSetting) => editorSetting,
                    success.missing,
                    dependencies.logger,
                );
            }
        }
    }

    if (results.failed.size !== 0) {
        logFailedConversions(
            Array.from(results.failed.values()).map((fail) => fail.message),
            dependencies.logger,
        );
    }
};
