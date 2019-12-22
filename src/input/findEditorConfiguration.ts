import { SansDependencies } from "../binding";
import { EditorConfiguration } from "./editorConfiguration";
import { findRawConfiguration } from "./findRawConfiguration";
import { DeepPartial } from "./findReportedConfiguration";
import { importer } from "./importer";
import { DEFAULT_VSCODE_SETTINGS_PATH } from "./vsCodeSettings";

export type FindEditorConfigurationDependencies = {
    importer: SansDependencies<typeof importer>;
};

export const findEditorConfiguration = async (
    dependencies: FindEditorConfigurationDependencies,
    config: string | undefined,
): Promise<DeepPartial<EditorConfiguration> | Error> => {
    const filePath = config ?? DEFAULT_VSCODE_SETTINGS_PATH;
    const rawConfiguration = await findRawConfiguration<DeepPartial<EditorConfiguration>>(
        dependencies.importer,
        filePath,
    );

    return rawConfiguration;
};
