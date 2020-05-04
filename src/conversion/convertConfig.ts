import { SansDependencies } from "../binding";
import { convertComments } from "../comments/convertComments";
import { summarizePackageRules } from "../creation/summarization/summarizePackageRules";
import { writeConversionResults } from "../creation/writeConversionResults";
import { findOriginalConfigurations } from "../input/findOriginalConfigurations";
import { logMissingPackages } from "../reporting/packages/logMissingPackages";
import { reportConversionResults } from "../reporting/reportConversionResults";
import { reportCommentResults } from "../reporting/reportCommentResults";
import { convertRules } from "../rules/convertRules";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../types";

export type ConvertConfigDependencies = {
    convertComments: SansDependencies<typeof convertComments>;
    convertRules: SansDependencies<typeof convertRules>;
    findOriginalConfigurations: SansDependencies<typeof findOriginalConfigurations>;
    logMissingPackages: SansDependencies<typeof logMissingPackages>;
    reportCommentResults: SansDependencies<typeof reportCommentResults>;
    reportConversionResults: SansDependencies<typeof reportConversionResults>;
    summarizePackageRules: SansDependencies<typeof summarizePackageRules>;
    writeConversionResults: SansDependencies<typeof writeConversionResults>;
};

/**
 * Root-level driver to convert a TSLint configuration to ESLint.
 * @see `Architecture.md` for documentation.
 */
export const convertConfig = async (
    dependencies: ConvertConfigDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    // 1. Existing configurations are read
    const originalConfigurations = await dependencies.findOriginalConfigurations(settings);
    if (originalConfigurations.status !== ResultStatus.Succeeded) {
        return originalConfigurations;
    }

    // 2. TSLint rules are converted into their ESLint configurations
    const ruleConversionResults = dependencies.convertRules(
        originalConfigurations.data.tslint.full.rules,
    );

    // 3. ESLint configurations are summarized based on extended ESLint and TSLint presets
    const summarizedConfiguration = await dependencies.summarizePackageRules(
        originalConfigurations.data.eslint,
        originalConfigurations.data.tslint,
        ruleConversionResults,
        settings.prettier,
    );

    // 4. The summarized configuration is written to the output config file
    const fileWriteError = await dependencies.writeConversionResults(
        settings.config,
        summarizedConfiguration,
        originalConfigurations.data,
    );
    if (fileWriteError !== undefined) {
        return {
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        };
    }

    // 5. Files to transform comments in have source text rewritten using the same rule conversion logic
    const commentsResult = await dependencies.convertComments(settings.comments);

    // 6. A summary of the results is printed to the user's console
    await dependencies.reportConversionResults(settings.config, summarizedConfiguration);
    dependencies.reportCommentResults(commentsResult);
    await dependencies.logMissingPackages(
        summarizedConfiguration,
        originalConfigurations.data.packages,
    );

    return commentsResult;
};
