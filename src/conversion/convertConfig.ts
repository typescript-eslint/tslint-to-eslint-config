import { SansDependencies } from "../binding";
import { simplifyPackageRules } from "../creation/simplification/simplifyPackageRules";
import { writeConversionResults } from "../creation/writeConversionResults";
import { findOriginalConfigurations } from "../input/findOriginalConfigurations";
import { logMissingPackages } from "../reporting/packages/logMissingPackages";
import { reportConversionResults } from "../reporting/reportConversionResults";
import { convertRules } from "../rules/convertRules";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../types";

export type ConvertConfigDependencies = {
    convertRules: SansDependencies<typeof convertRules>;
    findOriginalConfigurations: SansDependencies<typeof findOriginalConfigurations>;
    logMissingPackages: SansDependencies<typeof logMissingPackages>;
    reportConversionResults: SansDependencies<typeof reportConversionResults>;
    simplifyPackageRules: SansDependencies<typeof simplifyPackageRules>;
    writeConversionResults: SansDependencies<typeof writeConversionResults>;
};

/**
 * Root-level driver to convert a TSLint configuration to ESLint.
 * @see `Architecture.md` for documentation.
 */
export const convertConfig = async (
    dependencies: ConvertConfigDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    // 1. Existing configurations are read
    const originalConfigurations = await dependencies.findOriginalConfigurations(settings);
    if (originalConfigurations.status !== ResultStatus.Succeeded) {
        return originalConfigurations;
    }

    // 2. TSLint rules are converted into their ESLint configurations
    const ruleConversionResults = dependencies.convertRules(
        originalConfigurations.data.tslint.full.rules,
    );

    // 3. ESLint configurations are simplified based on extended ESLint and TSLint presets
    const simplifiedConfiguration = await dependencies.simplifyPackageRules(
        originalConfigurations.data.eslint,
        originalConfigurations.data.tslint,
        ruleConversionResults,
        settings.prettier,
    );

    // 4. The simplified configuration is written to the output config file
    const fileWriteError = await dependencies.writeConversionResults(
        settings.config,
        simplifiedConfiguration,
        originalConfigurations.data,
    );
    if (fileWriteError !== undefined) {
        return {
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        };
    }

    // 5. A summary of the results is printed to the user's console
    await dependencies.reportConversionResults(settings.config, simplifiedConfiguration);
    await dependencies.logMissingPackages(
        simplifiedConfiguration,
        originalConfigurations.data.packages,
    );

    return {
        status: ResultStatus.Succeeded,
    };
};
