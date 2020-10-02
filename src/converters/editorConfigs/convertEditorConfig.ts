import { FileSystem } from "../../adapters/fileSystem";
import { TSLintToESLintSettings } from "../../types";
import { EditorConfigDescriptor } from "./types";

export type ConvertEditorConfigDependencies = {
    editorConfigDescriptors: EditorConfigDescriptor[];
    fileSystem: Pick<FileSystem, "readFile">;
};

export const convertEditorConfig = async (
    dependencies: ConvertEditorConfigDependencies,
    requestedPath: string,
    settings: TSLintToESLintSettings,
) => {
    const editorConfigDescriptor = dependencies.editorConfigDescriptors.find(([defaultPath]) =>
        requestedPathMatchesDefault(defaultPath, requestedPath),
    );
    if (!editorConfigDescriptor) {
        return new Error(`Could not find a matching editor config for '${requestedPath}'.`);
    }

    const fileContents = await dependencies.fileSystem.readFile(requestedPath);
    if (fileContents instanceof Error) {
        return fileContents;
    }

    return editorConfigDescriptor[1](fileContents, settings);
};

const requestedPathMatchesDefault = (defaultPath: string, requestedPath: string) =>
    defaultPath.replace(/\W+/g, "") === requestedPath.replace(/\W+/g, "");
