import { FileSystem } from "../adapters/fileSystem";
import { SansDependencies } from "../binding";
import { EditorConfiguration } from "./editorConfiguration";
import { findRawConfiguration } from "./findRawConfiguration";
import { DeepPartial } from "./findReportedConfiguration";
import { importer } from "./importer";
import { DEFAULT_VSCODE_SETTINGS_PATH } from "./vsCodeSettings";

export type FindEditorConfigurationDependencies = {
    fileSystem: Pick<FileSystem, "fileExists">;
    importer: SansDependencies<typeof importer>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const findEditorConfiguration = async (
    dependencies: FindEditorConfigurationDependencies,
    specifiedConfigPath: string | undefined,
) => {
    const attemptingConfigPath = specifiedConfigPath ?? DEFAULT_VSCODE_SETTINGS_PATH;

    if (!(await dependencies.fileSystem.fileExists(attemptingConfigPath))) {
        return specifiedConfigPath === undefined
            ? undefined
            : {
                  configPath: attemptingConfigPath,
                  result: new Error(
                      `Could not find editor configuration under '${attemptingConfigPath}'.`,
                  ),
              };
    }

    const result = await findRawConfiguration<DeepPartial<EditorConfiguration>>(
        dependencies.importer,
        attemptingConfigPath,
    );

    return {
        configPath: attemptingConfigPath,
        result,
    };
};
