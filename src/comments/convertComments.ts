import { GlobAsync } from "../adapters/globAsync";
import { SansDependencies } from "../binding";
import { ResultStatus, ResultWithDataStatus } from "../types";
import { separateErrors, uniqueFromSources, isError } from "../utils";
import { convertFileComments } from "./convertFileComments";

export type ConvertCommentsDependencies = {
    convertFileComments: SansDependencies<typeof convertFileComments>;
    globAsync: GlobAsync;
};

const noGlobsResult: ResultWithDataStatus<string[]> = {
    errors: [new Error("--comments requires file path globs to be passed.")],
    status: ResultStatus.Failed,
};

export const convertComments = async (
    dependencies: ConvertCommentsDependencies,
    filePathGlobs: true | string | string[] | undefined,
): Promise<ResultWithDataStatus<string[] | undefined>> => {
    if (filePathGlobs === undefined) {
        return {
            data: undefined,
            status: ResultStatus.Succeeded,
        };
    }

    if (filePathGlobs === true) {
        return noGlobsResult;
    }

    const uniqueFilePathGlobs = uniqueFromSources(filePathGlobs);
    if (uniqueFilePathGlobs.join("") === "") {
        return noGlobsResult;
    }

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
