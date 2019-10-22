import { FileSystem } from "../adapters/fileSystem";
import { SansDependencies } from "../binding";
import {
    findEditorConfiguration,
    DEFAULT_VSCODE_SETTINGS_PATH,
} from "../input/findEditorConfiguration";
import { TSLintToESLintSettings, ResultWithStatus, ResultStatus } from "../types";
import { formatOutput } from "../creation/formatting/formatOutput";

export type ConvertEditorConfigDependencies = {
    findEditorConfiguration: SansDependencies<typeof findEditorConfiguration>;
    fileSystem: Pick<FileSystem, "writeFile">;
};

/**
 * Root-level driver to convert an editor configuration.
 *
 * Will currently only convert the rules:
 *  "editor.codeActionsOnSave" -> "source.fixAll.tslint"
 *  into
 *  "eslint.autoFixOnSave"
 *
 * TODO: devinmotion: Replacements should be moved into rules set (by editor).
 */
export const convertEditorConfig = async (
    dependencies: ConvertEditorConfigDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    // 1. Existing configurations are read
    const originalEditorConfiguration = await dependencies.findEditorConfiguration(settings.editor);
    if (originalEditorConfiguration instanceof Error) {
        return {
            errors: [originalEditorConfiguration],
            status: ResultStatus.Failed,
        };
    }

    // TODO: devinmotion: The following logic may be moved to editor conversion rules.
    // 2. Get relevant section in editor configuration
    const codeActionsOnSave = originalEditorConfiguration["editor.codeActionsOnSave"];

    // 3. Split properties to replace and original ones
    const {
        "source.fixAll.tslint": originalSourceFixAllTsLint,
        ...codeActionsOnSaveWithoutReplacedProperties
    } = codeActionsOnSave;

    // Nothing to convert
    if (!originalSourceFixAllTsLint) {
        return {
            status: ResultStatus.Succeeded,
        };
    }

    // 4. Rewrite editor configuration with replacements.
    const newEditorConfiguration = {
        ...originalEditorConfiguration,
        "editor.codeActionsOnSave": codeActionsOnSaveWithoutReplacedProperties,
        "eslint.autoFixOnSave": originalSourceFixAllTsLint,
    };

    const output = newEditorConfiguration;
    const outputPath = settings.editor ? settings.editor : DEFAULT_VSCODE_SETTINGS_PATH;

    const fileWriteError = await dependencies.fileSystem.writeFile(
        outputPath,
        formatOutput(outputPath, output),
    );
    if (fileWriteError !== undefined) {
        return {
            errors: [fileWriteError],
            status: ResultStatus.Failed,
        };
    }

    return {
        status: ResultStatus.Succeeded,
    };
};
