import { RuleConversionResults } from "../rules/convertRules";
import { SettingConversionResults } from "../settings/convertSettings";

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
    overrides: Partial<SettingConversionResults> = {},
): SettingConversionResults => ({
    converted: new Map(),
    failed: [],
    missing: [],
    ...overrides,
});
