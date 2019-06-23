import { createNewConfiguration } from "./creation/createNewConfiguration";
import { FoundTSLintRules } from "./input/findTslintRules";
import { ProcessLogger } from "./logger";
import { convertRules } from "./rules/convertRules";
import { reportConversionResults } from "./reporting";
import { TSLintToESLintSettings, TSLintToESLintResult, ResultStatus } from "./types";
import { converters } from "./rules/converters";

export type RuleFinder = (config: string) => Promise<FoundTSLintRules | Error>;

export type FileExists = (filePath: string) => Promise<boolean>;

export const convertConfig = async (
    settings: TSLintToESLintSettings,
    logger: ProcessLogger,
    ruleFinder: RuleFinder,
    fileExists: FileExists,
): Promise<TSLintToESLintResult> => {
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
