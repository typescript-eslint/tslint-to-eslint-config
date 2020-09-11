import minimatch from "minimatch";

import { GlobAsync } from "../adapters/globAsync";
import { SansDependencies } from "../binding";
import { TypeScriptConfiguration } from "../input/findTypeScriptConfiguration";
import { ResultStatus, ResultWithDataStatus } from "../types";
import { separateErrors, uniqueFromSources, isError } from "../utils";
import { collectCommentFileNames } from "./collectCommentFileNames";
import { convertFileComments } from "./convertFileComments";

export type ConvertCommentsDependencies = {
    convertFileComments: SansDependencies<typeof convertFileComments>;
    globAsync: GlobAsync;
    collectCommentFileNames: SansDependencies<typeof collectCommentFileNames>;
};

export const convertComments = async (
    dependencies: ConvertCommentsDependencies,
    filePathGlobs: true | string | string[] | undefined,
    typescriptConfiguration?: TypeScriptConfiguration,
): Promise<ResultWithDataStatus<string[] | undefined>> => {
    if (filePathGlobs === undefined) {
        return {
            data: undefined,
            status: ResultStatus.Succeeded,
        };
    }

    const commentFileNames = await dependencies.collectCommentFileNames(
        filePathGlobs,
        typescriptConfiguration,
    );

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

    const ruleConversionCache = new Map<string, string | undefined>();
    const fileFailures = (
        await Promise.all(
            uniqueGlobbedFilePaths.map(async (filePath) =>
                dependencies.convertFileComments(filePath, ruleConversionCache),
            ),
        )
    ).filter(isError);
    if (fileFailures.length !== 0) {
        return {
            errors: fileFailures,
            status: ResultStatus.Failed,
        };
    }

    return {
        data: uniqueGlobbedFilePaths,
        status: ResultStatus.Succeeded,
    };
};
