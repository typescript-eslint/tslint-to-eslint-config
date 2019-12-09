import { FileSystem } from "../adapters/fileSystem";
import { isError } from "../utils";
import * as utils from "tsutils";
import ts from "typescript";
import { converters } from "./converters";
import { formatRawTslintRule } from "./formatRawTslintRule";
import { ConversionError } from "../errors/conversionError";

// Inspirated by:
// - https://github.com/Microsoft/TypeScript/issues/21049
// - https://github.com/palantir/tslint/blob/master/src/enableDisableRules.ts
export type ConvertCommentsResultsDependencies = {
    fileSystem: Pick<FileSystem, "readDir" | "readFile" | "writeFile" | "writeFileSync">;
};

const tslintRegex: RegExp = new RegExp(/\s*tslint:(enable|disable)(?:-(line|next-line))?(:|\s|$)/g);

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

type Modifier = "line" | "next-line" | undefined;
function parseComment(
    commentText: string,
): { rulesList: string[] | "all"; isEnabled: boolean; modifier: Modifier } | undefined {
    const match = tslintRegex.exec(commentText);
    if (match === null) {
        return undefined;
    }

    // remove everything matched by the previous regex to get only the specified rules
    // split at whitespaces
    // filter empty items coming from whitespaces at start, at end or empty list
    let rulesList: string[] | "all" = splitOnSpaces(commentText.substr(match[0].length));
    if (rulesList.length === 0 && match[3] === ":") {
        // nothing to do here: an explicit separator was specified but no rules to switch
        return undefined;
    }
    if (rulesList.length === 0 || rulesList.indexOf("all") !== -1) {
        // if list is empty we default to all enabled rules
        // if `all` is specified we ignore the other rules and take all enabled rules
        rulesList = "all";
    }

    return { rulesList, isEnabled: match[1] === "enable", modifier: match[2] as Modifier };
}

function splitOnSpaces(str: string): string[] {
    return str.split(/\s+/).filter(s => s !== "");
}

interface IReplacement {
    start: number;
    end: number;
    replacementText: string;
}

const replaceComments = async (
    _dependencies: ConvertCommentsResultsDependencies,
    fileName: string,
    fileContent: string,
) => {
    const sourceFile: ts.SourceFile = ts.createSourceFile(
        fileName,
        fileContent,
        ts.ScriptTarget.ES2015,
        /*setParentNodes */ true,
    );
    // I assume that the token enum is `SingleLineCommentTrivia` to catch /* and // tokens.
    // If not, it is `MultiLineCommentTrivia` as this method does check if it is a comment...
    // or that's what I think it does.
    utils.forEachComment(sourceFile, (fullText, comment) => {
        const replacements: IReplacement[] = [];
        const commentText =
            comment.kind === ts.SyntaxKind.SingleLineCommentTrivia
                ? fullText.substring(comment.pos + 3, comment.end)
                : fullText.substring(comment.pos + 3, comment.end - 2);

        const parsed = parseComment(commentText);
        if (parsed !== undefined) {
            const { rulesList, modifier } = parsed;
            const switchRange = getSwitchRange(modifier, comment, sourceFile);
            if (switchRange !== undefined) {
                console.log("---------- COMMENT TEXT -----------");
                console.log(commentText);
                console.log("PARSED DATA");
                console.log(parsed);
                console.log("SWITCH RANGE");
                console.log(switchRange);
                const rulesToSwitch =
                    rulesList === "all"
                        ? Array.from(converters.keys())
                        : rulesList.filter(ruleKey => converters.has(ruleKey));
                for (const ruleToSwitch of rulesToSwitch) {
                    const transformedRules = switchRule(ruleToSwitch);
                    if (transformedRules) {
                        replacements.push({
                            start: switchRange.pos,
                            end: switchRange.end,
                            replacementText: transformedRules.join(" "),
                        });
                    }
                }
            }
        }
        // Reverse the replacement list
        replacements.reverse();

        const newText = getNewText(fileContent, replacements);
        console.log("************** NEW FILE BEING WRITTEN ! **************");
        console.log(newText);
        // dependencies.fileSystem.writeFileSync(fileName, newText);
    });
    return true;
};

function getNewText(sourceText: string, replacementsInReverse: IReplacement[]) {
    for (const { start, end, replacementText } of replacementsInReverse) {
        sourceText = sourceText.slice(0, start) + replacementText + sourceText.slice(end);
    }

    return sourceText;
}

function switchRule(ruleName: string): string[] | null {
    const tslintRuleConverter = converters.get(ruleName);
    if (tslintRuleConverter) {
        const tslintRule = formatRawTslintRule(ruleName, { ruleName });
        const conversion = tslintRuleConverter(tslintRule);
        if (!(conversion instanceof ConversionError)) {
            const eslintRules = conversion.rules.map(r => r.ruleName);
            console.log(`Rulename: ${ruleName}`);
            console.log(eslintRules);
            return eslintRules;
        }
    }
    return null;
}

function getSwitchRange(
    modifier: Modifier,
    range: ts.TextRange,
    sourceFile: ts.SourceFile,
): ts.TextRange | undefined {
    const lineStarts = sourceFile.getLineStarts();

    switch (modifier) {
        case "line":
            return {
                // start at the beginning of the line where comment starts
                pos: getStartOfLinePosition(range.pos),
                // end at the beginning of the line following the comment
                end: getStartOfLinePosition(range.end, 1),
            };
        case "next-line":
            // start at the beginning of the line following the comment
            const pos = getStartOfLinePosition(range.end, 1);
            if (pos === -1) {
                // no need to switch anything, there is no next line
                return undefined;
            }
            // end at the beginning of the line following the next line
            return { pos, end: getStartOfLinePosition(range.end, 2) };
        default:
            // switch rule for the rest of the file
            // start at the current position, but skip end position
            return { pos: range.pos, end: -1 };
    }

    /** Returns -1 for last line. */
    function getStartOfLinePosition(position: number, lineOffset = 0): number {
        const line = ts.getLineAndCharacterOfPosition(sourceFile, position).line + lineOffset;
        return line >= lineStarts.length ? -1 : lineStarts[line];
    }
}
