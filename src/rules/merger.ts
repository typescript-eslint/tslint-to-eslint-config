/**
 * Merges two ESLint rule result outputs to a single result.
 */
export type RuleMerger = (
    existingOptions: any[] | undefined,
    newOptions: any[] | undefined,
) => any[];
