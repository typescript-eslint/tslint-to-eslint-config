import { SansDependencies } from "../../binding";
import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations";
import { TSLintToESLintSettings, ResultWithStatus, ResultStatus } from "../../types";
import { logMissingPackages } from "./reporting/packages/logMissingPackages";
import { reportConfigConversionResults } from "./reporting/reportConfigConversionResults";
import { convertRules } from "./rules/convertRules";
import { summarizePackageRules } from "./summarization/summarizePackageRules";
import { writeConfigConversionResults } from "./writeConfigConversionResults";

export type ConvertLintConfigDependencies = {
    convertRules: SansDependencies<typeof convertRules>;
    logMissingPackages: SansDependencies<typeof logMissingPackages>;
    reportConfigConversionResults: SansDependencies<typeof reportConfigConversionResults>;
    summarizePackageRules: SansDependencies<typeof summarizePackageRules>;
    writeConfigConversionResults: SansDependencies<typeof writeConfigConversionResults>;
};

/**
 * Root-level driver to convert a TSLint configuration to ESLint.
 * @see `Architecture.md` for documentation.
 */
export const convertLintConfig = async (
    dependencies: ConvertLintConfigDependencies,
    settings: TSLintToESLintSettings,
    originalConfigurations: AllOriginalConfigurations,
): Promise<ResultWithStatus> => {
    const ruleConversionResults = dependencies.convertRules(
        originalConfigurations.tslint.full.rules,
    );

    const summarizedConfiguration = await dependencies.summarizePackageRules(
        originalConfigurations.eslint,
        originalConfigurations.tslint,
        ruleConversionResults,
        settings.prettier,
    );

    const fileWriteError = await dependencies.writeConfigConversionResults(
        settings.config,
        summarizedConfiguration,
        originalConfigurations,
    );
    if (fileWriteError !== undefined) {
        return {
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        };
    }

    await dependencies.reportConfigConversionResults(settings.config, summarizedConfiguration);

    await dependencies.logMissingPackages(summarizedConfiguration, originalConfigurations.packages);

    return {
        status: ResultStatus.Succeeded,
    };
};
