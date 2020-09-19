import minimatch from "minimatch";

import { GlobAsync } from "../../adapters/globAsync";
import { SansDependencies } from "../../binding";
import { collectCommentFileNames } from "../../comments/collectCommentFileNames";
import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations";
import { ResultWithDataStatus, ResultStatus, TSLintToESLintSettings } from "../../types";
import { uniqueFromSources, separateErrors, isError } from "../../utils";
import { convertFileComments } from "./convertFileComments";
import { reportCommentResults } from "./reporting/reportCommentResults";

export type ConvertCommentsDependencies = {
    collectCommentFileNames: SansDependencies<typeof collectCommentFileNames>;
    convertFileComments: SansDependencies<typeof convertFileComments>;
    globAsync: GlobAsync;
    reportCommentResults: SansDependencies<typeof reportCommentResults>;
};

export const convertComments = async (
    dependencies: ConvertCommentsDependencies,
    { comments }: Pick<TSLintToESLintSettings, "comments">,
    { typescript }: Pick<AllOriginalConfigurations, "typescript">,
    ruleEquivalents: Map<string, string[]>,
): Promise<ResultWithDataStatus<string[] | undefined>> => {
    if (comments === undefined) {
        dependencies.reportCommentResults();
        return {
            data: undefined,
            status: ResultStatus.Succeeded,
        };
    }

    const commentFileNames = await dependencies.collectCommentFileNames(comments, typescript);

    if (commentFileNames instanceof Error) {
        return {
            errors: [commentFileNames],
            status: ResultStatus.Failed,
        };
    }

    const { exclude, include } = commentFileNames;
    const [fileGlobErrors, globbedFilePaths] = separateErrors(
        await Promise.all(include.map(dependencies.globAsync)),
    );

    if (fileGlobErrors.length !== 0) {
        return {
            errors: fileGlobErrors,
            status: ResultStatus.Failed,
        };
    }

    if (globbedFilePaths.join("") === "") {
        return {
            errors: [
                new Error(
                    "--comments found no files. Consider passing no globs to it, to default to all TypeScript files.",
                ),
            ],
            status: ResultStatus.Failed,
        };
    }

    const uniqueGlobbedFilePaths = uniqueFromSources(...globbedFilePaths).filter(
        (filePathGlob) => !exclude?.some((exclusion) => minimatch(filePathGlob, exclusion)),
    );

    if (uniqueGlobbedFilePaths.join("") === "") {
        return {
            errors: [
                new Error(
                    `All files passed to --comments were excluded. Consider removing 'exclude' from your TypeScript configuration.`,
                ),
            ],
            status: ResultStatus.Failed,
        };
    }

    const ruleCommentsCache = new Map<string, string[]>();
    const fileFailures = (
        await Promise.all(
            uniqueGlobbedFilePaths.map(async (filePath) =>
                dependencies.convertFileComments(filePath, ruleCommentsCache, ruleEquivalents),
            ),
        )
    ).filter(isError);
    if (fileFailures.length !== 0) {
        return {
            errors: fileFailures,
            status: ResultStatus.Failed,
        };
    }

    dependencies.reportCommentResults(uniqueGlobbedFilePaths);

    return {
        data: uniqueGlobbedFilePaths,
        status: ResultStatus.Succeeded,
    };
};
