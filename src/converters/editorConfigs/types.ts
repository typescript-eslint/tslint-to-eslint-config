import { TSLintToESLintSettings } from "../../types.js";

export type EditorConfigConverter = (
    rawEditorSettings: string,
    settings: TSLintToESLintSettings,
) => EditorConfigConversionResults;

export type EditorConfigConversionResults = {
    contents: string;
    missing: string[];
};

export type EditorConfigsConversionResults = {
    failed: Map<string, Error>;
    successes: Map<string, EditorConfigConversionResults>;
};

export type EditorConfigDescriptor = readonly [string, EditorConfigConverter];
