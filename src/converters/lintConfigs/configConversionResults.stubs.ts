import { SummarizedConfigResultsConfiguration } from "./summarization/types";

export const createEmptyConfigConversionResults = (
    overrides: Partial<SummarizedConfigResultsConfiguration> = {},
): SummarizedConfigResultsConfiguration => ({
    converted: new Map(),
    extends: [],
    extensionRules: new Map(),
    failed: [],
    missing: [],
    plugins: new Set(),
    ruleEquivalents: new Map(),
    ...overrides,
});
