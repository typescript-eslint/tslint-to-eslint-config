import { EditorSettingConversionResults } from "../editorSettings/convertEditorSettings";
import { RuleConversionResults } from "../rules/convertRules";

export const createEmptyConversionResults = (
    overrides: Partial<RuleConversionResults> = {},
): RuleConversionResults => ({
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
