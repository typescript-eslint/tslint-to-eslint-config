import { SansDependencies } from "../binding";
import {
    ConfigurationErrorResult,
    ResultStatus,
    ResultWithDataStatus,
    TSLintToESLintSettings,
} from "../types";
import { isDefined } from "../utils";
import { findESLintConfiguration, ESLintConfiguration } from "./findESLintConfiguration";
import { PackagesConfiguration, findPackagesConfiguration } from "./findPackagesConfiguration";
import {
    findTypeScriptConfiguration,
    TypeScriptConfiguration,
} from "./findTypeScriptConfiguration";
import { findTSLintConfiguration, TSLintConfiguration } from "./findTSLintConfiguration";
import { mergeLintConfigurations } from "./mergeLintConfigurations";

export type FindOriginalConfigurationsDependencies = {
    findESLintConfiguration: SansDependencies<typeof findESLintConfiguration>;
    findPackagesConfiguration: SansDependencies<typeof findPackagesConfiguration>;
    findTypeScriptConfiguration: SansDependencies<typeof findTypeScriptConfiguration>;
    findTSLintConfiguration: SansDependencies<typeof findTSLintConfiguration>;
    mergeLintConfigurations: typeof mergeLintConfigurations;
};

/**
 * Both found configurations for a particular linter.
 */
export type OriginalConfigurations<Configuration> = {
    /**
     * Settings reported by the linter's native --print-config equivalent.
     */
    full: Configuration;

    /**
     * Raw import results from `import`ing the configuration file.
     */
    raw: Partial<Configuration>;
};

export type AllOriginalConfigurations = {
    eslint?: OriginalConfigurations<ESLintConfiguration>;
    packages?: PackagesConfiguration;
    tslint: OriginalConfigurations<TSLintConfiguration>;
    typescript?: TypeScriptConfiguration;
};

export const findOriginalConfigurations = async (
    dependencies: FindOriginalConfigurationsDependencies,
    rawSettings: TSLintToESLintSettings,
): Promise<ConfigurationErrorResult | ResultWithDataStatus<AllOriginalConfigurations>> => {
    // Simultaneously search for all required configuration types
    const [eslint, packages, tslint, typescript] = await Promise.all([
        dependencies.findESLintConfiguration(rawSettings),
        dependencies.findPackagesConfiguration(rawSettings.package),
        dependencies.findTSLintConfiguration(rawSettings.tslint),
        dependencies.findTypeScriptConfiguration(rawSettings.typescript),
    ]);

    // Out of those configurations, only TSLint's is always required to run
    if (tslint instanceof Error) {
        return {
            complaints: [getMissingPackageMessage(tslint) ?? tslint.message],
            status: ResultStatus.ConfigurationError,
        };
    }

    const configurationResults = [
        [eslint, "eslint"],
        [packages, "package"],
        [typescript, "typescript"],
    ] as const;

    // Other configuration errors only halt the program if...
    const errorMessages = configurationResults
        .map(([error, key]) => {
            if (!(error instanceof Error)) {
                return undefined;
            }

            // * Their failure was caused by a missing package that needs to be installed
            const missingPackageMessage = getMissingPackageMessage(error);
            if (missingPackageMessage !== undefined) {
                return missingPackageMessage;
            }

            // * The user explicitly asked for them
            if (typeof rawSettings[key] === "string") {
                return error.message;
            }

            return undefined;
        })
        .filter(isDefined);

    if (errorMessages.length !== 0) {
        return {
            complaints: errorMessages,
            status: ResultStatus.ConfigurationError,
        };
    }

    return {
        data: {
            ...(!(eslint instanceof Error) && { eslint }),
            ...(!(packages instanceof Error) && { packages }),
            tslint: dependencies.mergeLintConfigurations(eslint, tslint),
            ...(!(typescript instanceof Error) && { typescript }),
        },
        status: ResultStatus.Succeeded,
    };
};

const getMissingPackageMessage = (error: Error) => {
    const match = /(Cannot find module|could not require|couldn't find the plugin) ([a-zA-Z0-9-_"'@/]+)/.exec(
        error.message,
    );
    if (match === null) {
        return undefined;
    }

    return `Could not import the ${match[2]} module. Do you need to install packages?`;
};
