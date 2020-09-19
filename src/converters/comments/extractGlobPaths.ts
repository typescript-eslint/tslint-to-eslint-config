import minimatch from "minimatch";

import { GlobAsync } from "../../adapters/globAsync";
import { CommentFileNames } from "../../comments/collectCommentFileNames";
import { ResultStatus, ResultWithDataStatus } from "../../types";
import { separateErrors, uniqueFromSources } from "../../utils";

export type ExtractGlobPathsDependencies = {
    globAsync: GlobAsync;
};

export const extractGlobPaths = async (
    dependencies: ExtractGlobPathsDependencies,
    { exclude, include }: CommentFileNames,
): Promise<ResultWithDataStatus<string[]>> => {
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

    return {
        data: uniqueGlobbedFilePaths,
        status: ResultStatus.Succeeded,
    };
};
