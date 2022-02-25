import { FileSystem } from "../../adapters/fileSystem.js";
import { RuleConverter } from "../lintConfigs/rules/ruleConverter.js";
import { parseFileComments } from "./parseFileComments.js";
import { replaceFileComments } from "./replaceFileComments.js";

export type ConvertFileCommentsDependencies = {
    converters: Map<string, RuleConverter>;
    fileSystem: Pick<FileSystem, "readFile" | "writeFile">;
};

export const convertFileComments = async (
    dependencies: ConvertFileCommentsDependencies,
    filePath: string,
    ruleCommentsCache: Map<string, string[]>,
    ruleEquivalents: Map<string, string[]>,
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
        ruleCommentsCache,
        ruleEquivalents,
    );

    return fileContent === newFileContent
        ? undefined
        : await dependencies.fileSystem.writeFile(filePath, newFileContent);
};
