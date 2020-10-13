import { Logger } from "../../../adapters/logger";
import { logSuccessfulConversions, logFailedConversions } from "../../../reporting";

export type EditorSettingConversionResults = {
    failed: Error[];
    successes: string[];
};

export type ReportEditorConfigConversionResultsDependencies = {
    logger: Logger;
};

export const reportEditorConfigConversionResults = (
    dependencies: ReportEditorConfigConversionResultsDependencies,
    results: EditorSettingConversionResults,
) => {
    if (results.successes.length !== 0) {
        logSuccessfulConversions(
            "editor file",
            "augmented",
            results.successes.length,
            dependencies.logger,
        );
    }

    if (results.failed.length !== 0) {
        logFailedConversions(
            results.failed.map((fail) => fail.message),
            dependencies.logger,
        );
    }
};
