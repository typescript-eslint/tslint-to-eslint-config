import { RuleMerger } from "../ruleMerger.js";

export const mergeNoEval: RuleMerger = (existingOptions, newOptions) => {
    if (existingOptions === undefined && newOptions === undefined) {
        return [];
    }

    let allowIndirect = true;

    for (const options of [existingOptions, newOptions]) {
        if (
            options === undefined ||
            options.length === 0 ||
            options[0].allowIndirect === undefined
        ) {
            allowIndirect = false;
            break;
        }

        allowIndirect = allowIndirect && options[0].allowIndirect;
    }

    return [
        {
            ...(allowIndirect && { allowIndirect }),
        },
    ];
};
