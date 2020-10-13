import { TSLintToESLintSettings } from "../../types";

export type EditorConfigConverter = (
    rawEditorSettings: string,
    settings: TSLintToESLintSettings,
) => string;

export type EditorConfigDescriptor = readonly [string, EditorConfigConverter];
