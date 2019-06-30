import { FileSystem } from "../adapters/fileSystem";
import { Logger } from "../adapters/logger";
import { SansDependencies } from "../binding";
import { createNewConfiguration } from "../creation/createNewConfiguration";
import { findTslintConfiguration } from "../input/findTslintConfiguration";
import { convertRules } from "../rules/convertRules";
import { converters } from "../rules/converters";
import { mergers } from "../rules/mergers";
import { TSLintToESLintSettings, TSLintToESLintResult, ResultStatus } from "../types";
import { reportConversionResults } from "../reporting/reportConversionResults";

export type ConvertConfigDependencies = {
    createNewConfiguration: SansDependencies<typeof createNewConfiguration>;
    fileSystem: Pick<FileSystem, "fileExists">;
    findTslintConfiguration: SansDependencies<typeof findTslintConfiguration>;
    logger: Logger;
    reportConversionResults: SansDependencies<typeof reportConversionResults>;
};

export const convertConfig = async (
    dependencies: ConvertConfigDependencies,
    settings: TSLintToESLintSettings,
): Promise<TSLintToESLintResult> => {
    const { config = "./tslint.json" } = settings;
    if (!(await dependencies.fileSystem.fileExists(config))) {
        return {
            complaint: `${config} does not seem to exist.`,
            status: ResultStatus.ConfigurationError,
        };
    }

    const originalConfiguration = await dependencies.findTslintConfiguration(config);
    if (originalConfiguration instanceof Error) {
        return {
            error: originalConfiguration,
            status: ResultStatus.Failed,
        };
    }

    const convertedRules = convertRules(
        Object.entries(originalConfiguration.rules).map(([ruleName, value]) => ({
            ruleName,
            ...value,
        })),
        converters,
        mergers,
    );

    await dependencies.createNewConfiguration(convertedRules, originalConfiguration);
    dependencies.reportConversionResults(convertedRules);

    return {
        status: ResultStatus.Succeeded,
    };
};
