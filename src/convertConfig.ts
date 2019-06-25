import { FoundTSLintRules } from "./input/findTslintRules";
import { ProcessLogger } from "./logger";
import { reportConversionResults } from "./reportConversionResults";
import { convertRules, ConfigConversionResults } from "./rules/convertRules";
import { converters } from "./rules/converters";
import { TSLintToESLintSettings, TSLintToESLintResult, ResultStatus } from "./types";

export type CreateNewConfiguration = (conversionResults: ConfigConversionResults) => Promise<void>;

export type FileExists = (filePath: string) => Promise<boolean>;

export type RuleFinder = (config: string) => Promise<FoundTSLintRules | Error>;

export type ConvertConfigRequest = {
    createNewConfiguration: CreateNewConfiguration;
    fileExists: FileExists;
    logger: ProcessLogger;
    ruleFinder: RuleFinder;
    settings: TSLintToESLintSettings;
};

export const convertConfig = async ({
    createNewConfiguration,
    fileExists,
    logger,
    ruleFinder,
    settings,
}: ConvertConfigRequest): Promise<TSLintToESLintResult> => {
    const { config = "./tslint.json" } = settings;
    if (!(await fileExists(config))) {
        return {
            complaint: `${config} does not seem to exist.`,
            status: ResultStatus.ConfigurationError,
        };
    }

    const originalRules = await ruleFinder(config);
    if (originalRules instanceof Error) {
        return {
            error: originalRules,
            status: ResultStatus.Failed,
        };
    }

    const convertedRules = convertRules(
        Object.entries(originalRules.rules).map(([ruleName, value]) => ({
            ruleName,
            ...value,
        })),
        converters,
    );

    await createNewConfiguration(convertedRules);
    reportConversionResults(convertedRules, logger);

    return {
        status: ResultStatus.Succeeded,
    };
};
