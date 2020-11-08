import { createESLintConfiguration } from "../converters/lintConfigs/createESLintConfiguration";
import { ESLintConfiguration } from "../input/findESLintConfiguration";
import {
    AllOriginalConfigurations,
    OriginalConfigurations,
} from "../input/findOriginalConfigurations";
import { PackagesConfiguration } from "../input/findPackagesConfiguration";
import { TSLintConfiguration } from "../input/findTSLintConfiguration";
import { TypeScriptConfiguration } from "../input/findTypeScriptConfiguration";
import { createESLintConfigurationDependencies } from "./dependencies";

export type AllOriginalConfigurationsOptionally = {
    eslint?: Partial<OriginalConfigurations<ESLintConfiguration>>;
    packages?: PackagesConfiguration;
    tslint: Partial<OriginalConfigurations<TSLintConfiguration>>;
    typescript?: TypeScriptConfiguration;
};

/**
 * Creates a raw output ESLint configuration summary from input configuration values.
 *
 * @param originalConfigurations
 * Any input configuration objects, including 'raw' (exact configuration file contents)
 * and 'full' (tool-reported computed values) for both ESLint and TSLint.
 * @param prettier
 * Whether to always consider the output configuration as extending from the Prettier
 * ruleset, instead of inferring it from computed rule values (recommended).
 */
export const createESLintConfigurationStandalone = async (
    originalConfigurations: AllOriginalConfigurations,
    prettier?: boolean,
) => {
    const allOriginalConfigurations = { ...originalConfigurations };

    if (allOriginalConfigurations.eslint) {
        allOriginalConfigurations.eslint.full ??= allOriginalConfigurations.eslint.raw;
    }

    if (allOriginalConfigurations.tslint) {
        allOriginalConfigurations.tslint.full ??= allOriginalConfigurations.tslint.raw;
    }

    return createESLintConfiguration(
        createESLintConfigurationDependencies,
        originalConfigurations,
        prettier,
        new Map<string, string[]>(),
    );
};
