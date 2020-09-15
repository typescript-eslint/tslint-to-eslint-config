import { RuleMerger } from "../ruleMerger";

export const mergeConsistentTypeAssertions: RuleMerger = (existingOptions, newOptions) => {
    return [existingOptions?.[0] ?? newOptions?.[0]].filter(Boolean);
};
