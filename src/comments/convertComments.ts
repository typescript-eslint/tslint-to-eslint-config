import { GlobAsync } from "../adapters/globAsync";
import { SansDependencies } from "../binding";
import { ResultStatus, ResultWithDataStatus } from "../types";
import { separateErrors, uniqueFromSources, isError } from "../utils";
import { convertFileComments } from "./convertFileComments";

export type ConvertCommentsDependencies = {
    convertFileComments: SansDependencies<typeof convertFileComments>;
    globAsync: GlobAsync;
};

export const convertComments = async (
    dependencies: ConvertCommentsDependencies,
    filePathGlobs: string | string[] | undefined,
): Promise<ResultWithDataStatus<string[]>> => {
    const uniqueFilePathGlobs = uniqueFromSources(filePathGlobs);
    const [fileGlobErrors, globbedFilePaths] = separateErrors(
        await Promise.all(uniqueFilePathGlobs.map(dependencies.globAsync)),
    );
    if (fileGlobErrors.length !== 0) {
        return {
            errors: fileGlobErrors,
            status: ResultStatus.Failed,
        };
    }

    const ruleConversionCache = new Map<string, string | undefined>();
    const uniqueGlobbedFilePaths = uniqueFromSources(...globbedFilePaths);
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
