import { SansDependencies } from "../binding";
import { writeConversionResults } from "../creation/writeConversionResults";
import { findOriginalConfigurations } from "../input/findOriginalConfigurations";
import { reportConversionResults } from "../reporting/reportConversionResults";
import { convertRules } from "../rules/convertRules";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../types";

export type ConvertConfigDependencies = {
    convertRules: SansDependencies<typeof convertRules>;
    findOriginalConfigurations: SansDependencies<typeof findOriginalConfigurations>;
    reportConversionResults: SansDependencies<typeof reportConversionResults>;
    writeConversionResults: SansDependencies<typeof writeConversionResults>;
};

export const convertConfig = async (
    dependencies: ConvertConfigDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    const originalConfigurations = await dependencies.findOriginalConfigurations(settings);
    if (originalConfigurations.status !== ResultStatus.Succeeded) {
        return originalConfigurations;
    }

    const ruleConversionResults = dependencies.convertRules(
        originalConfigurations.data.tslint.rules,
    );

    await dependencies.writeConversionResults(
        settings.config,
        ruleConversionResults,
        originalConfigurations.data,
    );
    dependencies.reportConversionResults(ruleConversionResults);

    return {
        status: ResultStatus.Succeeded,
    };
};
