import { RuleMerger } from "../ruleMerger";

export const mergeNamingConvention: RuleMerger = (existingOptions, newOptions) => {
    if (existingOptions === undefined && newOptions === undefined) {
        return [];
    }

    return [...(existingOptions ?? []), ...(newOptions ?? [])];
};
