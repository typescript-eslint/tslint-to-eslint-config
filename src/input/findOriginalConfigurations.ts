import { SansDependencies } from "../binding";
import { ResultStatus, TSLintToESLintSettings, ResultWithDataStatus } from "../types";
import { findESLintConfiguration, ESLintConfiguration } from "./findESLintConfiguration";
import { PackagesConfiguration, findPackagesConfiguration } from "./findPackagesConfiguration";
import {
    findTypeScriptConfiguration,
    TypeScriptConfiguration,
} from "./findTypeScriptConfiguration";
import { findTSLintConfiguration, TSLintConfiguration } from "./findTSLintConfiguration";

export type FindOriginalConfigurationsDependencies = {
    findESLintConfiguration: SansDependencies<typeof findESLintConfiguration>;
    findPackagesConfiguration: SansDependencies<typeof findPackagesConfiguration>;
    findTypeScriptConfiguration: SansDependencies<typeof findTypeScriptConfiguration>;
    findTSLintConfiguration: SansDependencies<typeof findTSLintConfiguration>;
};

export type OriginalConfigurations = {
    eslint?: ESLintConfiguration;
    packages?: PackagesConfiguration;
    tslint: TSLintConfiguration;
    typescript?: TypeScriptConfiguration;
};

export const findOriginalConfigurations = async (
    dependencies: FindOriginalConfigurationsDependencies,
    rawSettings: TSLintToESLintSettings,
): Promise<ResultWithDataStatus<OriginalConfigurations>> => {
    const [eslint, packages, tslint, typescript] = await Promise.all([
        dependencies.findESLintConfiguration(rawSettings.eslint),
        dependencies.findPackagesConfiguration(rawSettings.package),
        dependencies.findTSLintConfiguration(rawSettings.tslint),
        dependencies.findTypeScriptConfiguration(rawSettings.typescript),
    ]);

    if (tslint instanceof Error) {
        return {
            complaints: [tslint.message],
            status: ResultStatus.ConfigurationError,
        };
    }

    return {
        data: {
            ...(!(eslint instanceof Error) && { eslint }),
            ...(!(packages instanceof Error) && { packages }),
            tslint,
            ...(!(typescript instanceof Error) && { typescript }),
        },
        status: ResultStatus.Succeeded,
    };
};
