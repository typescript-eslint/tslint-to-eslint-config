import { RuleMerger } from "../ruleMerger";

export const mergeJsxCurlySpacing: RuleMerger = (existingOptions, newOptions) => {
    if (existingOptions === undefined && newOptions === undefined) {
        return [];
    }

    return [
        {
            ...(existingOptions ?? [])[0],
            ...(newOptions ?? [])[0],
        },
    ];
};
