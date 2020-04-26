import { EditorSettingConversionResults } from "../editorSettings/convertEditorSettings";
import { SimplifiedResultsConfiguration } from "../creation/simplification/simplifyPackageRules";

export const createEmptyConversionResults = (
    overrides: Partial<SimplifiedResultsConfiguration> = {},
): SimplifiedResultsConfiguration => ({
    converted: new Map(),
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
