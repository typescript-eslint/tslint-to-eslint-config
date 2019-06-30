import { SansDependencies } from "../binding";
import { ResultStatus, TSLintToESLintSettings, ResultWithDataStatus } from "../types";
import { findESLintConfiguration, ESLintConfiguration } from "./findESLintConfiguration";
import {
    findTypeScriptConfiguration,
    TypeScriptConfiguration,
} from "./findTypeScriptConfiguration";
import { findTSLintConfiguration, TSLintConfiguration } from "./findTSLintConfiguration";

export type FindOriginalConfigurationsDependencies = {
    findESLintConfiguration: SansDependencies<typeof findESLintConfiguration>;
    findTypeScriptConfiguration: SansDependencies<typeof findTypeScriptConfiguration>;
    findTSLintConfiguration: SansDependencies<typeof findTSLintConfiguration>;
};

export type OriginalConfigurationsData = {
    eslint?: ESLintConfiguration;
    tslint: TSLintConfiguration;
    typescript?: TypeScriptConfiguration;
};

export const findOriginalConfigurations = async (
    dependencies: FindOriginalConfigurationsDependencies,
    rawSettings: TSLintToESLintSettings,
): Promise<ResultWithDataStatus<OriginalConfigurationsData>> => {
    const [eslint, tslint, typescript] = await Promise.all([
        dependencies.findESLintConfiguration(rawSettings.eslintConfig),
        dependencies.findTSLintConfiguration(rawSettings.tslintConfig),
        dependencies.findTypeScriptConfiguration(rawSettings.typescriptConfig),
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
            tslint,
            ...(!(typescript instanceof Error) && { typescript }),
        },
        status: ResultStatus.Succeeded,
    };
};
