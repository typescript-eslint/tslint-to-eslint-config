import { bind, SansDependencies } from "../../binding";
import {
    collectCommentFileNames,
    collectCommentFileNamesDependencies,
} from "../../comments/collectCommentFileNames";
import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations";
import { ResultWithDataStatus, ResultStatus, TSLintToESLintSettings } from "../../types";
import { isError } from "../../utils";
import { convertFileComments, convertFileCommentsDependencies } from "./convertFileComments";
import { extractGlobPaths, extractGlobPathsDependencies } from "./extractGlobPaths";
import {
    reportCommentResults,
    reportCommentResultsDependencies,
} from "./reporting/reportCommentResults";

export type ConvertCommentsDependencies = {
    collectCommentFileNames: SansDependencies<typeof collectCommentFileNames>;
    convertFileComments: SansDependencies<typeof convertFileComments>;
    extractGlobPaths: SansDependencies<typeof extractGlobPaths>;
    reportCommentResults: SansDependencies<typeof reportCommentResults>;
};

export const convertCommentsDependencies: ConvertCommentsDependencies = {
    collectCommentFileNames: bind(collectCommentFileNames, collectCommentFileNamesDependencies),
    convertFileComments: bind(convertFileComments, convertFileCommentsDependencies),
    extractGlobPaths: bind(extractGlobPaths, extractGlobPathsDependencies),
    reportCommentResults: bind(reportCommentResults, reportCommentResultsDependencies),
};

/**
 * Root-level driver to convert a tslint:disable comments to eslint-disables.
 * @see `/docs/Architecture/Comments.md` for documentation.
 */
export const convertComments = async (
    dependencies: ConvertCommentsDependencies,
    { comments }: Pick<TSLintToESLintSettings, "comments">,
    { typescript }: Pick<AllOriginalConfigurations, "typescript">,
    ruleEquivalents: Map<string, string[]>,
): Promise<ResultWithDataStatus<string[] | undefined>> => {
    // 1. If no comments are requested to be converted, immediately report it out and mark this as passed.
    if (comments === undefined) {
        dependencies.reportCommentResults();
        return {
            data: undefined,
            status: ResultStatus.Succeeded,
        };
    }

    // 2. Create the list of include and possibly exclude globs to search on.
    const commentFileNames = await dependencies.collectCommentFileNames(comments, typescript);
    if (commentFileNames instanceof Error) {
        return {
            errors: [commentFileNames],
            status: ResultStatus.Failed,
        };
    }

    // 3. Search for files matching those globs to have their comments converted.
    const globbedFilePaths = await dependencies.extractGlobPaths(commentFileNames);
    if (globbedFilePaths.status !== ResultStatus.Succeeded) {
        return globbedFilePaths;
    }

    // 4. Convert comments in the contents of each file, storing equivalents in a cache.
    const uniqueGlobbedFilePaths = globbedFilePaths.data;
    const ruleCommentsCache = new Map<string, string[]>();
    const fileFailures = (
        await Promise.all(
            globbedFilePaths.data.map(async (filePath) =>
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

    // 5. Report out the results of converting the unique globbed file paths.
    dependencies.reportCommentResults(uniqueGlobbedFilePaths);

    return {
        data: uniqueGlobbedFilePaths,
        status: ResultStatus.Succeeded,
    };
};
