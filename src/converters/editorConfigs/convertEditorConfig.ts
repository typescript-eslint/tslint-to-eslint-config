import { FileSystem } from "../../adapters/fileSystem";
import { fsFileSystem } from "../../adapters/fsFileSystem";
import { TSLintToESLintSettings } from "../../types";
import { EditorConfigConverter } from "./types";

export type ConvertEditorConfigDependencies = {
    fileSystem: Pick<FileSystem, "readFile" | "writeFile">;
};

export const convertEditorConfigDependencies: ConvertEditorConfigDependencies = {
    fileSystem: fsFileSystem,
};

/**
 * @see /docs/Editors.md for documentation.
 */
export const convertEditorConfig = async (
    dependencies: ConvertEditorConfigDependencies,
    converter: EditorConfigConverter,
    requestedPath: string,
    settings: TSLintToESLintSettings,
) => {
    // 3a. The requested path's contents are read from disk.
    const originalFileContents = await dependencies.fileSystem.readFile(requestedPath);
    if (originalFileContents instanceof Error) {
        return originalFileContents;
    }

    // 3b. That converter function is run on the file path.
    const conversion = converter(originalFileContents, settings);

    // 3c. If no error occurred, the description of changed settings is reported.
    const error = await dependencies.fileSystem.writeFile(requestedPath, conversion.contents);

    return error ?? conversion;
};
