import { SansDependencies } from "../binding";
import {
    ConfigurationErrorResult,
    ConfigurationLocations,
    ResultStatus,
    SucceededDataResult,
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
import { DeepPartial } from "./findReportedConfiguration";

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
    raw: DeepPartial<Configuration>;
};

export type AllOriginalConfigurations = {
    eslint?: OriginalConfigurations<ESLintConfiguration>;
    packages?: PackagesConfiguration;
    tslint: OriginalConfigurations<TSLintConfiguration>;
    typescript?: TypeScriptConfiguration;
};

/**
 * Searches for all relevant input configurations on disk.
 */
export const findOriginalConfigurations = async (
    dependencies: FindOriginalConfigurationsDependencies,
    locations: ConfigurationLocations,
): Promise<ConfigurationErrorResult | SucceededDataResult<AllOriginalConfigurations>> => {
    // Simultaneously search for all required configuration types
    const [eslint, packages, tslint, typescript] = await Promise.all([
        dependencies.findESLintConfiguration(locations),
        dependencies.findPackagesConfiguration(locations.package),
        dependencies.findTSLintConfiguration(locations.tslint),
        dependencies.findTypeScriptConfiguration(locations.typescript),
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
            if (typeof locations[key] === "string") {
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
        error.message.split('\n').slice(0, 2).join('\n'),
    );
    if (match === null) {
        return undefined;
    }

    return `Could not import the ${match[2]} module. Do you need to install packages?`;
};
