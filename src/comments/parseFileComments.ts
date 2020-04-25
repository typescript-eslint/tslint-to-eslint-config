import * as utils from "tsutils";
import * as ts from "typescript";

export type FileComment = {
    commentKind: ts.CommentKind;
    directive: TSLintDirective;
    end: number;
    pos: number;
    ruleNames: string[];
};

export type TSLintDirective = "tslint:disable" | "tslint:disable-next-line" | "tslint:enable";

/**
 * @see https://github.com/Microsoft/TypeScript/issues/21049
 */
export const parseFileComments = (filePath: string, content: string) => {
    const sourceFile = ts.createSourceFile(
        filePath,
        content,
        ts.ScriptTarget.Latest,
        /*setParentNodes */ true,
    );
    const directives: FileComment[] = [];

    utils.forEachComment(sourceFile, (fullText, comment) => {
        const parsedComment = parseFileComment(fullText, comment);
        if (parsedComment !== undefined) {
            directives.push(parsedComment);
        }
    });

    return directives;
};

/**
 * @see https://github.com/palantir/tslint/blob/master/src/enableDisableRules.ts
 */
const tslintRegex = new RegExp(/tslint:(enable|disable)(?:-(line|next-line))?(:|\s|$)/g);

const parseFileComment = (fullText: string, comment: ts.CommentRange): FileComment | undefined => {
    const commentText = (comment.kind === ts.SyntaxKind.SingleLineCommentTrivia
        ? fullText.substring(comment.pos + 2, comment.end)
        : fullText.substring(comment.pos + 2, comment.end - 2)
    ).trim();
    const match = commentText.match(tslintRegex);
    if (match === null) {
        return undefined;
    }

    return {
        commentKind: comment.kind,
        directive: match[0].replace("e:", "e") as TSLintDirective,
        end: comment.end,
        pos: comment.pos,
        ruleNames: commentText.slice(match[0].length).split(/\s+/).map(trimColons).filter(Boolean),
    };
};

const trimColons = (text: string) =>
    text
        .replace(/^(:|\s)*/, "")
        .replace(/(:|\s)*$/, "")
        .trim();
