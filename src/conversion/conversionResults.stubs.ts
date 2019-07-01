import { RuleConversionResults } from "../rules/convertRules";

export const createEmptyConversionResults = (
    overrides: Partial<RuleConversionResults>,
): RuleConversionResults => ({
    converted: new Map(),
    failed: [],
    missing: [],
    packages: new Set(),
    ...overrides,
});
