import { bind, SansDependencies } from "../binding";
import { findConfigurationDependencies } from "../input/dependencies";
import {
    findTypeScriptConfiguration,
    TypeScriptConfiguration,
} from "../input/findTypeScriptConfiguration";
import { uniqueFromSources } from "../utils";

export type CollectCommentFileNamesDependencies = {
    findTypeScriptConfiguration: SansDependencies<typeof findTypeScriptConfiguration>;
};

export const collectCommentFileNamesDependencies: CollectCommentFileNamesDependencies = {
    findTypeScriptConfiguration: bind(findTypeScriptConfiguration, findConfigurationDependencies),
};

export type CommentFileNames = {
    exclude?: string[];
    include: string[];
};

export const collectCommentFileNames = async (
    dependencies: CollectCommentFileNamesDependencies,
    filePathGlobs: true | string | string[],
    typescriptConfiguration?: TypeScriptConfiguration,
): Promise<CommentFileNames | Error> => {
    if (filePathGlobs === true) {
        if (!typescriptConfiguration) {
            return new Error(
                "--comments indicated to convert files listed in a tsconfig.json, but one was not found on disk or specified by with --typescript.",
            );
        }

        return {
            exclude: typescriptConfiguration.exclude,
            include: uniqueFromSources(
                typescriptConfiguration.files,
                typescriptConfiguration.include,
            ),
        };
    }

    if (typeof filePathGlobs === "string" && filePathGlobs.endsWith(".json")) {
        const findResult = await dependencies.findTypeScriptConfiguration(filePathGlobs);
        if (findResult instanceof Error) {
            return findResult;
        }

        return await collectCommentFileNames(dependencies, true, findResult);
    }

    return {
        include: uniqueFromSources(filePathGlobs),
    };
};
