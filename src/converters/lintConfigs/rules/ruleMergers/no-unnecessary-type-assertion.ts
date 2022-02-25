import { RuleMerger } from "../ruleMerger.js";

export const mergeNoUnnecessaryTypeAssertion: RuleMerger = (existingOptions, newOptions) => {
    if (existingOptions === undefined && newOptions === undefined) {
        return [];
    }

    let typesToIgnore: string[] | undefined;

    for (const options of [existingOptions, newOptions]) {
        if (
            options === undefined ||
            options.length === 0 ||
            options[0].typesToIgnore === undefined
        ) {
            continue;
        }

        if (typesToIgnore === undefined) {
            typesToIgnore = [];
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        typesToIgnore.push(...options[0].typesToIgnore);
    }

    return [
        {
            ...(typesToIgnore !== undefined && { typesToIgnore }),
        },
    ];
};
