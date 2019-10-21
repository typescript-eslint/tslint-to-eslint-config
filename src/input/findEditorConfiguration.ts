import { FileSystem } from "../adapters/fileSystem";
import { DeepPartial } from "./findConfiguration";

/**
 * TODO: devinmotion: This may be moved into a more centralized place.
 */
export const DEFAULT_VSCODE_SETTINGS_PATH = ".vscode/settings.json";

/**
 * TODO: devinmotion: This may be moved to special config conversion rules.
 */
export type EditorConfiguration = {
    "editor.codeActionsOnSave": {
        "source.fixAll.tslint": boolean;
    };
};

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
            throw new Error(path);
        }
        return JSON.parse(fileContents) as DeepPartial<Configuration>;
    } catch (error) {
        return new Error(`Error parsing configuration: ${error}`);
    }
};
