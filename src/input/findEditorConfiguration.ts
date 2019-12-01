import { FileSystem } from "../adapters/fileSystem";
import { EditorConfiguration } from "./editorConfiguration";
import { DeepPartial } from "./findReportedConfiguration";
import { DEFAULT_VSCODE_SETTINGS_PATH } from "./vsCodeSettings";

export type FindEditorConfigurationDependencies = {
    fileSystem: Pick<FileSystem, "readFile">;
};

export const findEditorConfiguration = async (
    dependencies: FindEditorConfigurationDependencies,
    config: string | undefined,
): Promise<DeepPartial<EditorConfiguration> | Error> => {
    const rawConfiguration = await readConfiguration<EditorConfiguration>(
        dependencies.fileSystem,
        config || DEFAULT_VSCODE_SETTINGS_PATH,
    );

    return rawConfiguration;
};

const readConfiguration = async <Configuration>(
    fileSystem: Pick<FileSystem, "readFile">,
    path: string,
): Promise<DeepPartial<Configuration> | Error> => {
    try {
        const fileContents = await fileSystem.readFile(path);
        if (fileContents instanceof Error) {
            throw new Error(fileContents.message);
        }
        return JSON.parse(fileContents) as DeepPartial<Configuration>;
    } catch (error) {
        return error;
    }
};
