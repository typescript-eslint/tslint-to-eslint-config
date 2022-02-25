import assignWith from "lodash/assignWith";
import isObject from "lodash/isObject";

import { RuleMerger } from "../ruleMerger";

const NO_USE_BEFORE_DEFINE_DEFAULT_OPTS = {
    classes: true,
    enums: true,
    functions: true,
    ignoreTypeReferences: true,
    typedefs: true,
    variables: true,
};

export const mergeNoUseBeforeDefine: RuleMerger = (existingOptions, newOptions) => {
    const existingSingleOption = existingOptions?.[0];
    const newSingleOption = newOptions?.[0];

    if (existingSingleOption === undefined && newSingleOption === undefined) {
        return [];
    }

    // when not explicitly opting out with a flag assume that the option is requesting at least that flag
    if (
        (existingSingleOption === undefined && isOnlyTrueFlags(newSingleOption)) ||
        (newSingleOption === undefined && isOnlyTrueFlags(existingSingleOption))
    ) {
        return [];
    }

    return [
        assignWith(
            {},
            NO_USE_BEFORE_DEFINE_DEFAULT_OPTS,
            existingSingleOption,
            newSingleOption,
            (currentValue, newValue) => {
                if (currentValue === undefined) {
                    return newValue;
                }

                // when merging the flags always keep the opted out (false) flags
                return !!currentValue && !!newValue;
            },
        ),
    ];
};

function isOnlyTrueFlags(flagsObject: unknown) {
    return isObject(flagsObject) && Object.values(flagsObject).every((flag) => !!flag);
}
