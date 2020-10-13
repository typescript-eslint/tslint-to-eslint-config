import { FileSystem } from "../../adapters/fileSystem";
import { TSLintToESLintSettings } from "../../types";
import { EditorConfigConverter } from "./types";

export type ConvertEditorConfigDependencies = {
    fileSystem: Pick<FileSystem, "readFile" | "writeFile">;
};

export const convertEditorConfig = async (
    dependencies: ConvertEditorConfigDependencies,
    converter: EditorConfigConverter,
    requestedPath: string,
    settings: TSLintToESLintSettings,
) => {
    const originalFileContents = await dependencies.fileSystem.readFile(requestedPath);
    if (originalFileContents instanceof Error) {
        return originalFileContents;
    }

    const updatedFileContents = converter(originalFileContents, settings);

    return await dependencies.fileSystem.writeFile(requestedPath, updatedFileContents);
};
