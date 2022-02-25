import { SummarizedConfigResultsConfiguration } from "./summarization/types.js";

export const createEmptyConfigConversionResults = (
    overrides: Partial<SummarizedConfigResultsConfiguration> = {},
): SummarizedConfigResultsConfiguration => ({
    converted: new Map(),
    extends: [],
    extensionRules: new Map(),
    failed: [],
    missing: [],
    obsolete: new Set(),
    plugins: new Set(),
    ruleEquivalents: new Map(),
    ...overrides,
});
