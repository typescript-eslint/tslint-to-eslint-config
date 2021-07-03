import { RuleMerger } from "../ruleMerger";

/**
 * https://eslint.org/docs/rules/no-empty arguments merger.
 *
 * The only (and optional) option is `{ allowEmptyCatch: boolean }` which defaults to `{ allowEmptyCatch: false }`.
 *
 * Since the `false` case is stricter this sould only set `{ allowEmptyCatch: true }` when both inputs enable it.
 */
export const mergeNoEmpty: RuleMerger = (existingOptions, newOptions) => {
    if (
        existingOptions === undefined ||
        newOptions === undefined ||
        existingOptions.length === 0 ||
        newOptions.length === 0 ||
        !existingOptions[0].allowEmptyCatch ||
        !newOptions[0].allowEmptyCatch
    ) {
        return [];
    }

    return [{ allowEmptyCatch: true }];
};
