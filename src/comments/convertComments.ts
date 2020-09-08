import minimatch from "minimatch";

import { GlobAsync } from "../adapters/globAsync";
import { SansDependencies } from "../binding";
import { TypeScriptConfiguration } from "../input/findTypeScriptConfiguration";
import { ResultStatus, ResultWithDataStatus } from "../types";
import { separateErrors, uniqueFromSources, isError } from "../utils";
import { convertFileComments } from "./convertFileComments";

export type ConvertCommentsDependencies = {
    convertFileComments: SansDependencies<typeof convertFileComments>;
    globAsync: GlobAsync;
};

export const convertComments = async (
    dependencies: ConvertCommentsDependencies,
    filePathGlobs: true | string | string[] | undefined,
    typescriptConfiguration?: TypeScriptConfiguration,
): Promise<ResultWithDataStatus<string[] | undefined>> => {
    let fromTypeScriptConfiguration: TypeScriptConfiguration | undefined;

    if (filePathGlobs === true) {
        if (!typescriptConfiguration) {
            return {
                errors: [
                    new Error(
                        "--comments indicated to convert files listed in a tsconfig.json, but one was not found on disk or specified by with --typescript.",
                    ),
                ],
                status: ResultStatus.Failed,
            };
        }

        filePathGlobs = [
            ...(typescriptConfiguration.files ?? []),
            ...(typescriptConfiguration.include ?? []),
        ];
        fromTypeScriptConfiguration = typescriptConfiguration;
    }

    if (filePathGlobs === undefined) {
        return {
            data: undefined,
            status: ResultStatus.Succeeded,
        };
    }
    const uniqueFilePathGlobs = uniqueFromSources(filePathGlobs);
    if (uniqueFilePathGlobs.join("") === "") {
        return {
            errors: [
                new Error(
                    "--comments found no files. Consider passing no globs to it, to default to all TypeScript files.",
                ),
            ],
            status: ResultStatus.Failed,
        };
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
    const uniqueGlobbedFilePaths = uniqueFromSources(...globbedFilePaths).filter(
        (filePathGlob) =>
            !fromTypeScriptConfiguration?.exclude?.some((exclude) =>
                minimatch(filePathGlob, exclude),
            ),
    );

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
