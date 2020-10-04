import { createESLintConfiguration } from "../converters/lintConfigs/createESLintConfiguration";
import { formatOutput } from "../converters/lintConfigs/formatting/formatOutput";
import {
    joinConfigConversionResults,
    JoinedConversionResult,
} from "../converters/lintConfigs/joinConfigConversionResults";
import { findOriginalConfigurations } from "../input/findOriginalConfigurations";
import {
    ConfigurationErrorResult,
    LintConfigConversionSettings,
    ResultStatus,
    SucceededDataResult,
} from "../types";
import {
    createESLintConfigurationDependencies,
    findOriginalConfigurationsDependencies,
} from "./dependencies";

/**
 * Resultant configuration data from converting a TSLint configuration.
 */
export type TSLintConversionData = {
    /**
     * Formatted configuration string per the output file's extension.
     */
    formatted: string;

    /**
     * Object description of the resultant configuration data.
     */
    raw: JoinedConversionResult;
};

/**
 * Finds relevant configurations on disk and outputs the generated ESLint configuration.
 *
 * @param settings - Settings to find and convert configurations to an ESLint configuration.
 */
export const convertTSLintConfigStandalone = async (
    rawSettings: Partial<LintConfigConversionSettings> = {},
): Promise<ConfigurationErrorResult | SucceededDataResult<TSLintConversionData>> => {
    const settings = {
        ...rawSettings,
        config: ".eslintrc.js",
    };
    const originalConfigurations = await findOriginalConfigurations(
        findOriginalConfigurationsDependencies,
        settings,
    );
    if (originalConfigurations.status !== ResultStatus.Succeeded) {
        return originalConfigurations;
    }

    const summarizedConfiguration = await createESLintConfiguration(
        createESLintConfigurationDependencies,
        originalConfigurations.data,
        settings.prettier,
        new Map(),
    );

    const output = joinConfigConversionResults(
        summarizedConfiguration,
        originalConfigurations.data,
    );

    return {
        data: {
            formatted: formatOutput(settings.config, output),
            raw: output,
        },
        status: ResultStatus.Succeeded,
    };
};
