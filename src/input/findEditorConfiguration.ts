import { SansDependencies } from "../binding";
import { EditorConfiguration } from "./editorConfiguration";
import { findRawConfiguration } from "./findRawConfiguration";
import { DeepPartial } from "./findReportedConfiguration";
import { importer } from "./importer";
import { FileSystem } from "../adapters/fileSystem";

export type FindEditorConfigurationDependencies = {
    fileSystem: Pick<FileSystem, "fileExists">;
    importer: SansDependencies<typeof importer>;
};

export const findEditorConfiguration = async (
    dependencies: FindEditorConfigurationDependencies,
    config: string,
): Promise<DeepPartial<EditorConfiguration> | Error | undefined> => {
    if (!(await dependencies.fileSystem.fileExists(config))) {
        return undefined;
    }

    return await findRawConfiguration<DeepPartial<EditorConfiguration>>(
        dependencies.importer,
        config,
    );
};
