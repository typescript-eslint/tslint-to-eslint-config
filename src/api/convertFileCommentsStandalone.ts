import { parseFileComments } from "../converters/comments/parseFileComments";
import { replaceFileComments } from "../converters/comments/replaceFileComments";
import { ruleConverters } from "../converters/lintConfigs/rules/ruleConverters";

export type ConvertFileCommentsStandaloneDependencies = {
    /**
     * Original content of the source file.
     */
    fileContent: string;

    /**
     * Absolute or relative path to the file.
     *
     * @remarks
     * The file extension here is important, as parsing *.ts is different from *.tsx.
     */
    filePath: string;

    /**
     * Optional cache of comment conversions, for performance across multiple file conversions.
     */
    ruleCommentsCache?: Map<string, string[]>;

    /**
     * Known rule equivalents as converted by a previous configuration.
     */
    ruleEquivalents?: Map<string, string[]>;
};

/**
 * Replaces TSLint disable comments in source code with their ESLint equivalent.
 */
export const convertFileCommentsStandalone = ({
    fileContent,
    filePath,
    ruleCommentsCache = new Map<string, string[]>(),
    ruleEquivalents = new Map<string, string[]>(),
}: ConvertFileCommentsStandaloneDependencies) => {
    const comments = parseFileComments(filePath, fileContent);

    return replaceFileComments(
        fileContent,
        comments,
        ruleConverters,
        ruleCommentsCache,
        ruleEquivalents,
    );
};
