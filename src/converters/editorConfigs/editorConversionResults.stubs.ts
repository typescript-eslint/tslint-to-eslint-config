import { EditorSettingConversionResults } from "./convertEditorSettings";

export const createEmptyEditorSettingConversionResults = (
    overrides: Partial<EditorSettingConversionResults> = {},
): EditorSettingConversionResults => ({
    converted: new Map(),
    failed: [],
    missing: [],
    ...overrides,
});
