import { TSLintConfiguration } from "./input/findTslintConfiguration";
import { ProcessLogger } from "./logger";
import { reportConversionResults } from "./reportConversionResults";
import { convertRules, ConfigConversionResults } from "./rules/convertRules";
import { converters } from "./rules/converters";
import { TSLintToESLintSettings, TSLintToESLintResult, ResultStatus } from "./types";

export type CreateNewConfiguration = (
    conversionResults: ConfigConversionResults,
    originalConfiguration: TSLintConfiguration,
) => Promise<void>;

export type FileExists = (filePath: string) => Promise<boolean>;

export type findTslintConfiguration = (config: string) => Promise<TSLintConfiguration | Error>;

export type ConvertConfigRequest = {
    createNewConfiguration: CreateNewConfiguration;
    fileExists: FileExists;
    findTslintConfiguration: findTslintConfiguration;
    logger: ProcessLogger;
    settings: TSLintToESLintSettings;
};

export const convertConfig = async ({
    createNewConfiguration,
    fileExists,
    findTslintConfiguration,
    logger,
    settings,
}: ConvertConfigRequest): Promise<TSLintToESLintResult> => {
    const { config = "./tslint.json" } = settings;
    if (!(await fileExists(config))) {
        return {
            complaint: `${config} does not seem to exist.`,
            status: ResultStatus.ConfigurationError,
        };
    }

    const originalConfiguration = await findTslintConfiguration(config);
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
    );

    await createNewConfiguration(convertedRules, originalConfiguration);
    reportConversionResults(convertedRules, logger);

    return {
        status: ResultStatus.Succeeded,
    };
};
