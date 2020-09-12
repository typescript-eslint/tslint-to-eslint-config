import minimatch from "minimatch";

import { GlobAsync } from "../../adapters/globAsync";
import { SansDependencies } from "../../binding";
import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations";
import { TypeScriptConfiguration } from "../../input/findTypeScriptConfiguration";
import { ResultWithDataStatus, ResultStatus, TSLintToESLintSettings } from "../../types";
import { uniqueFromSources, separateErrors, isError } from "../../utils";
import { convertFileComments } from "./convertFileComments";
import { reportCommentResults } from "./reporting/reportCommentResults";

export type ConvertCommentsDependencies = {
    convertFileComments: SansDependencies<typeof convertFileComments>;
    globAsync: GlobAsync;
    reportCommentResults: SansDependencies<typeof reportCommentResults>;
};

export const convertComments = async (
    dependencies: ConvertCommentsDependencies,
    { comments }: Pick<TSLintToESLintSettings, "comments">,
    { typescript }: Pick<AllOriginalConfigurations, "typescript">,
): Promise<ResultWithDataStatus<string[] | undefined>> => {
    if (comments === undefined) {
        dependencies.reportCommentResults();
        return {
            data: undefined,
            status: ResultStatus.Succeeded,
        };
    }

    let fromTypeScript: TypeScriptConfiguration | undefined;

    if (comments === true) {
        if (!typescript) {
            return {
                errors: [
                    new Error(
                        "--comments indicated to convert files listed in a tsconfig.json, but one was not found on disk or specified by with --typescript.",
                    ),
                ],
                status: ResultStatus.Failed,
            };
        }

        comments = [...(typescript.files ?? []), ...(typescript.include ?? [])];
        fromTypeScript = typescript;
    }

    const uniqueFilePathGlobs = uniqueFromSources(comments);
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
            !fromTypeScript?.exclude?.some((exclude) => minimatch(filePathGlob, exclude)),
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

    dependencies.reportCommentResults(uniqueGlobbedFilePaths);

    return {
        status: ResultStatus.Succeeded,
    };
};
