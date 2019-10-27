import { convertEditorCodeActionsOnSave } from "./converters/editor-code-actions-on-save";

/**
 * Keys TSLint property names in editor settings to their ESLint editor settings converters.
 */
export const converters = new Map([["editor.codeActionsOnSave", convertEditorCodeActionsOnSave]]);
