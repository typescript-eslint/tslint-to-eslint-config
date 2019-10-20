import { FileSystem } from "../adapters/fileSystem";
import { isError } from "../utils";
import { getCommentAtPosition } from "tsutils";
import * as ts from "typescript";

// Check https://github.com/Microsoft/TypeScript/issues/21049

export type ConvertCommentsResultsDependencies = {
    fileSystem: Pick<FileSystem, "readDir" | "readFile" | "writeFile">;
};

export const convertComments = async (dependencies: ConvertCommentsResultsDependencies) => {
    // TODO: Remove console logs
    console.log("Started");
    const filenames = await dependencies.fileSystem.readDir("./", { withFileTypes: true });
    if (!isError(filenames)) {
        const filteredFilenames: string[] = filenames
            .filter(fileEnt => fileEnt.isFile())
            .map(fileEnt => fileEnt.name);
        // TODO: Remove console logs
        console.log("Filenames filtered");
        console.log(filteredFilenames);
        for (const filename of filteredFilenames) {
            const fileContent: string | Error = await dependencies.fileSystem.readFile(filename);
            if (!isError(fileContent)) {
                const writeFileRes = await replaceComments(dependencies, filename, fileContent);
                if (isError(writeFileRes)) {
                    return Error("Failed to convert file comments");
                }
            }
        }
        return undefined;
    } else {
        return Error("Failed to convert file comments");
    }
};

const replaceComments = async (
    dependencies: ConvertCommentsResultsDependencies,
    fileName: string,
    fileContent: string,
) => {
    const tslintRegex: RegExp = new RegExp(
        /\/[\/\*]\s*(tslint):(enable|disable)((?:-next)?-line)?(?::\s)?(:?(?:(?:[\w-]+\/)*[\w-]+\s*\s*)*(?:(?:[\w-]+\/)*[\w-]+\s*)*[\w-]+)?\s*?(?:$|\*\/)/gm,
    );
    const sourceFile: ts.SourceFile = ts.createSourceFile(
        fileName,
        fileContent,
        ts.ScriptTarget.ES2015,
        /*setParentNodes */ true,
    );
    for (
        let match = tslintRegex.exec(sourceFile.text);
        match !== null;
        match = tslintRegex.exec(sourceFile.text)
    ) {
        // TODO: Remove console logs
        console.log("Match");
        console.log(match);
        console.log(match[0].length);
        const comment: ts.CommentRange | undefined = getCommentAtPosition(sourceFile, match.index);
        console.log("comment");
        console.log(comment);
        if (
            comment === undefined ||
            comment.pos !== match.index ||
            comment.end !== match.index + match[0].length
        ) {
            continue;
        }
        console.log("Passed Check");
    }
    return await dependencies.fileSystem.writeFile(fileName, fileContent);
};
