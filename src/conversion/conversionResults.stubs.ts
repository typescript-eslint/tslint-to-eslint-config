import { SummarizedResultsConfiguration } from "../creation/summarization/types";
import { EditorSettingConversionResults } from "../editorSettings/convertEditorSettings";

export const createEmptyConversionResults = (
    overrides: Partial<SummarizedResultsConfiguration> = {},
): SummarizedResultsConfiguration => ({
    converted: new Map(),
    extends: [],
    extensionRules: new Map(),
    failed: [],
    missing: [],
    plugins: new Set(),
    ...overrides,
});

export const createEmptySettingConversionResults = (
    overrides: Partial<EditorSettingConversionResults> = {},
): EditorSettingConversionResults => ({
    converted: new Map(),
    failed: [],
    missing: [],
    ...overrides,
});
