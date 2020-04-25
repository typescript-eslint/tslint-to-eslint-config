import { FileSystem } from "../adapters/fileSystem";
import { SansDependencies } from "../binding";
import { parseFileComments } from "./parseFileComments";
import { replaceFileComments } from "./replaceFileComments";

export type ConvertFileCommentsDependencies = {
    fileSystem: Pick<FileSystem, "readFile" | "writeFile">;
    replaceFileComments: SansDependencies<typeof replaceFileComments>;
};

export const convertFileComments = async (
    dependencies: ConvertFileCommentsDependencies,
    filePath: string,
    ruleConversionCache: Map<string, string | undefined>,
) => {
    const content = await dependencies.fileSystem.readFile(filePath);
    if (content instanceof Error) {
        return content;
    }

    const comments = parseFileComments(filePath, content);
    const newFileContent = dependencies.replaceFileComments(content, comments, ruleConversionCache);

    return await dependencies.fileSystem.writeFile(filePath, newFileContent);
};
