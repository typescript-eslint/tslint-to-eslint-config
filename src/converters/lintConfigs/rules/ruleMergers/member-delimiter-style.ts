import { RuleMerger } from "../ruleMerger";

export const mergeNoMemberDelimiterStyle: RuleMerger = (existingOptions, newOptions) => {
    if (existingOptions === undefined && newOptions === undefined) {
        return [];
    }

    return [merge((existingOptions ?? [])[0] ?? {}, (newOptions ?? [])[0] ?? {})];
};

const merge = (...objs: Record<string, any>[]) =>
    [...objs].reduce(
        (acc, obj) => ({
            ...acc,
            ...Object.keys(obj).reduce((_, k) => {
                acc[k] = obj[k];
                return acc;
            }, {}),
        }),
        {},
    );
