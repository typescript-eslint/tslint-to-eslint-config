import { TSLintToESLintSettings } from "../../types";

export type EditorConfigConverter = (
    rawEditorSettings: string,
    settings: TSLintToESLintSettings,
) => any;

export type EditorConfigDescriptor = [string, EditorConfigConverter];
