import { FileSystem } from "../../adapters/fileSystem";
import { fsFileSystem } from "../../adapters/fsFileSystem";
import { bind, SansDependencies } from "../../binding";
import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations";
import { TSLintToESLintSettings, ResultWithStatus, ResultStatus } from "../../types";
import {
    createESLintConfiguration,
    createESLintConfigurationDependencies,
} from "./createESLintConfiguration";
import { formatOutput } from "./formatting/formatOutput";
import { joinConfigConversionResults } from "./joinConfigConversionResults";
import {
    logMissingPackages,
    logMissingPackagesDependencies,
} from "./reporting/packages/logMissingPackages";
import {
    reportConfigConversionResults,
    reportConversionResultsDependencies,
} from "./reporting/reportConfigConversionResults";

export type ConvertLintConfigDependencies = {
    createESLintConfiguration: SansDependencies<typeof createESLintConfiguration>;
    fileSystem: Pick<FileSystem, "writeFile">;
    logMissingPackages: SansDependencies<typeof logMissingPackages>;
    reportConfigConversionResults: SansDependencies<typeof reportConfigConversionResults>;
};

export const convertLintConfigDependencies: ConvertLintConfigDependencies = {
    createESLintConfiguration: bind(
        createESLintConfiguration,
        createESLintConfigurationDependencies,
    ),
    fileSystem: fsFileSystem,
    logMissingPackages: bind(logMissingPackages, logMissingPackagesDependencies),
    reportConfigConversionResults: bind(
        reportConfigConversionResults,
        reportConversionResultsDependencies,
    ),
};

/**
 * Root-level driver to convert a TSLint configuration to ESLint.
 * @see `/docs/Architecture/Linting.md` for documentation.
 */
export const convertLintConfig = async (
    dependencies: ConvertLintConfigDependencies,
    settings: TSLintToESLintSettings,
    originalConfigurations: AllOriginalConfigurations,
    ruleEquivalents: Map<string, string[]>,
): Promise<ResultWithStatus> => {
    // 1. Deduplicated ESLint rules and metadata are generated from raw TSLint rules.
    const summarizedConfiguration = await dependencies.createESLintConfiguration(
        originalConfigurations,
        settings.prettier,
        ruleEquivalents,
    );

    // 2. Those deduplicated rules and metadata are written to the output configuration file.
    const output = joinConfigConversionResults(summarizedConfiguration, originalConfigurations);

    // 3. That ESLint configuration output is written to the output configuration file.
    const fileWriteError = await dependencies.fileSystem.writeFile(
        settings.config,
        formatOutput(settings.config, output),
    );
    if (fileWriteError !== undefined) {
        return {
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        };
    }

    // 5. A summary of conversion results is printed, along with any now-missing packages.
    await dependencies.reportConfigConversionResults(settings.config, summarizedConfiguration);
    await dependencies.logMissingPackages(summarizedConfiguration, originalConfigurations.packages);

    return {
        status: ResultStatus.Succeeded,
    };
};
