import { convertEditorCodeActionsOnSave } from "./converters/editor-code-actions-on-save";
import { convertTSLintConfigFile } from "./converters/tslint-config-file";

/**
 * Keys TSLint property names in editor settings to their ESLint editor settings converters.
 */
export const editorSettingsConverters = new Map([
    ["editor.codeActionsOnSave", convertEditorCodeActionsOnSave],
    ["tslint.configFile", convertTSLintConfigFile],
]);
