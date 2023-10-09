import { FileSystem } from "../adapters/fileSystem";
import { SansDependencies } from "../binding";
import {
    findTypeScriptConfiguration,
    TypeScriptConfiguration,
} from "../input/findTypeScriptConfiguration";
import { uniqueFromSources } from "../utils";

export type CollectCommentFileNamesDependencies = {
    findTypeScriptConfiguration: SansDependencies<typeof findTypeScriptConfiguration>;
    fileSystem: Pick<FileSystem, "directoryExists">;
};

export type CommentFileNames = {
    exclude?: string[];
    include: string[];
};

export const collectCommentFileNames = async (
    dependencies: CollectCommentFileNamesDependencies,
    filePathGlobs: string[] | string | true,
    typescriptConfiguration?: TypeScriptConfiguration,
): Promise<CommentFileNames | Error> => {
    if (filePathGlobs === true) {
        if (!typescriptConfiguration) {
            return new Error(
                "--comments indicated to convert files listed in a tsconfig.json, but one was not found on disk or specified by with --typescript.",
            );
        }

        const includeList = uniqueFromSources(
            typescriptConfiguration.files,
            typescriptConfiguration.include,
        );

        // Remove directories specified in the include list. Ignore
        // Errors as they'll be handled when reading the file.
        const includeListFiles = (
            await Promise.all(includeList.map(dependencies.fileSystem.directoryExists))
        )
            .map((isDirectory, i) => {
                if (isDirectory) {
                    return null;
                }
                return includeList[i];
            })
            .filter((item): item is string => typeof item === "string");

        return {
            exclude: typescriptConfiguration.exclude,
            include: includeListFiles,
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
