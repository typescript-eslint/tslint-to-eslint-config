import { SansDependencies } from "../binding";
import { simplifyPackageRules } from "../creation/simplification/simplifyPackageRules";
import { writeConversionResults } from "../creation/writeConversionResults";
import { findOriginalConfigurations } from "../input/findOriginalConfigurations";
import { reportConversionResults } from "../reporting/reportConversionResults";
import { convertRules } from "../rules/convertRules";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../types";

export type ConvertConfigDependencies = {
    convertRules: SansDependencies<typeof convertRules>;
    findOriginalConfigurations: SansDependencies<typeof findOriginalConfigurations>;
    reportConversionResults: SansDependencies<typeof reportConversionResults>;
    simplifyPackageRules: SansDependencies<typeof simplifyPackageRules>;
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
    const mergedConfiguration = {
        ...ruleConversionResults,
        ...(await dependencies.simplifyPackageRules(
            originalConfigurations.data.eslint,
            ruleConversionResults,
        )),
    };

    await dependencies.writeConversionResults(
        settings.config,
        mergedConfiguration,
        originalConfigurations.data,
    );
    dependencies.reportConversionResults(mergedConfiguration);

    return {
        status: ResultStatus.Succeeded,
    };
};
