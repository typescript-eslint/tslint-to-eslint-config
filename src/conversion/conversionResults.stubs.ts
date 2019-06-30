import { ConfigConversionResults } from "../rules/convertRules";

export const createEmptyConversionResults = (
    overrides: Partial<ConfigConversionResults>,
): ConfigConversionResults => ({
    converted: new Map(),
    failed: [],
    missing: [],
    packages: new Set(),
    ...overrides,
});
