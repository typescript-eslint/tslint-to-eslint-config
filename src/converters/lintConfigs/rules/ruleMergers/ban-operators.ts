import { RuleMerger } from "../ruleMerger.js";

export const mergeBanOperators: RuleMerger = (existingOptions, newOptions) => {
    if (existingOptions === undefined && newOptions === undefined) {
        return [];
    }

    return [
        {
            ...existingOptions?.[0],
            ...newOptions?.[0],
        },
    ];
};
