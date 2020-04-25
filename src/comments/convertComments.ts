import { GlobAsync } from "../adapters/globAsync";
import { SansDependencies } from "../binding";
import { ResultStatus, ResultWithStatus } from "../types";
import { separateErrors, uniqueFromSources, isError } from "../utils";
import { convertFileComments } from "./convertFileComments";

export type ConvertCommentsDependencies = {
    convertFileComments: SansDependencies<typeof convertFileComments>;
    globAsync: GlobAsync;
};

export const convertComments = async (
    dependencies: ConvertCommentsDependencies,
    filePathGlobs: string | string[] | undefined,
): Promise<ResultWithStatus> => {
    if (filePathGlobs === undefined) {
        return {
            status: ResultStatus.Succeeded,
        };
    }

    const [fileGlobErrors, globbedFilePaths] = separateErrors(
        await Promise.all(uniqueFromSources(filePathGlobs).map(dependencies.globAsync)),
    );
    if (fileGlobErrors.length !== 0) {
        return {
            errors: fileGlobErrors,
            status: ResultStatus.Failed,
        };
    }

    const ruleConversionCache = new Map<string, string | undefined>();
    const fileFailures = (
        await Promise.all(
            uniqueFromSources(...globbedFilePaths).map(async filePath =>
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
        status: ResultStatus.Succeeded,
    };
};
