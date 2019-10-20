import { FileSystem } from "../adapters/fileSystem";
import { isError } from "../utils";
import { getCommentAtPosition } from "tsutils";
import * as ts from "typescript";

// Check https://github.com/Microsoft/TypeScript/issues/21049

export type ConvertCommentsResultsDependencies = {
    fileSystem: Pick<FileSystem, "readDir" | "readFile" | "writeFile">;
};

export const convertComments = async (dependencies: ConvertCommentsResultsDependencies) => {
    const filenames = await dependencies.fileSystem.readDir("", { withFileTypes: true });
    if (!isError(filenames)) {
        const filteredFilenames: string[] = filenames
            .filter(fileEnt => fileEnt.isFile())
            .map(fileEnt => fileEnt.name);
        for (const filename of filteredFilenames) {
            const fileContent: string | Error = await dependencies.fileSystem.readFile(filename);
            if (!isError(fileContent)) {
                replaceComments(filename, fileContent);
            }
        }
    }
    return Promise.resolve();
};

const replaceComments = (fileName: string, fileContent: string) => {
    const tslintRegex: RegExp = new RegExp(
        "/[/*]s*tslint:(enable|disable)((?:-next)?-line)?s*?(?:|*/)",
    );
    const sourceFile: ts.SourceFile = ts.createSourceFile(
        fileName,
        fileContent,
        ts.ScriptTarget.ES2015,
        /*setParentNodes */ true,
    );

    for (
        let match = tslintRegex.exec(fileContent);
        match !== null;
        match = tslintRegex.exec(fileContent)
    ) {
        const comment: ts.CommentRange | undefined = getCommentAtPosition(sourceFile, match.index);
        if (
            comment === undefined ||
            comment.pos !== match.index ||
            comment.end !== match.index + match[0].length
        )
            continue;
        console.log(match);
    }
};
