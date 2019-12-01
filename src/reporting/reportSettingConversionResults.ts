import { EOL } from "os";

import { SettingConversionResults } from "../settings/convertSettings";
import { EditorSetting } from "../settings/types";
import { ReportConversionResultsDependencies } from "./dependencies";
import {
    logFailedConversions,
    logMissingConversionTarget,
    logSuccessfulConversions,
} from "./reportOutputs";

export const reportSettingConversionResults = (
    dependencies: ReportConversionResultsDependencies,
    settingConversionResults: SettingConversionResults,
) => {
    if (settingConversionResults.converted.size !== 0) {
        logSuccessfulConversions(
            "setting",
            settingConversionResults.converted,
            dependencies.logger,
        );
    }

    if (settingConversionResults.failed.length !== 0) {
        logFailedConversions(settingConversionResults.failed, dependencies.logger);
    }

    if (settingConversionResults.missing.length !== 0) {
        const missingSettingOutputMapping = (setting: Pick<EditorSetting, "settingName">) =>
            `${setting.settingName} does not yet have an ESLint equivalent.${EOL}`;
        logMissingConversionTarget(
            "setting",
            missingSettingOutputMapping,
            settingConversionResults.missing,
            dependencies.logger,
        );
    }
};
