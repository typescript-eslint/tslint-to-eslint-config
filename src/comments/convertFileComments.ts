import { FileSystem } from "../adapters/fileSystem";
import { parseFileComments } from "./parseFileComments";
import { replaceFileComments } from "./replaceFileComments";
import { RuleConverter } from "../rules/converter";

export type ConvertFileCommentsDependencies = {
    converters: Map<string, RuleConverter>;
    fileSystem: Pick<FileSystem, "readFile" | "writeFile">;
};

export const convertFileComments = async (
    dependencies: ConvertFileCommentsDependencies,
    filePath: string,
    ruleConversionCache: Map<string, string | undefined>,
) => {
    const fileContent = await dependencies.fileSystem.readFile(filePath);
    if (fileContent instanceof Error) {
        return fileContent;
    }

    const comments = parseFileComments(filePath, fileContent);
    const newFileContent = replaceFileComments(
        fileContent,
        comments,
        dependencies.converters,
        ruleConversionCache,
    );

    return fileContent === newFileContent
        ? undefined
        : await dependencies.fileSystem.writeFile(filePath, newFileContent);
};
