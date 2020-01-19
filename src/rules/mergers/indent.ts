import { RuleMerger } from "../merger";

const ESLINT_INDENT_DEFAULT = 4;

export const mergeIndent: RuleMerger = (existingOptions, newOptions) => {
    if (existingOptions === undefined && newOptions === undefined) {
        return [];
    }

    // Resolve indent size
    let indentSize = ESLINT_INDENT_DEFAULT; // default
    for (const options of [existingOptions, newOptions]) {
        if (
            options === undefined ||
            options.length === 0 ||
            options[0] === ESLINT_INDENT_DEFAULT // ignore default
        ) {
            continue;
        }
        indentSize = options[0];
    }

    // Resolve object option
    let objectOption = null;
    for (const options of [existingOptions, newOptions]) {
        if (options === undefined || options.length < 2 || options[1] === undefined) {
            continue;
        }
        objectOption = {
            ...(objectOption || {}),
            ...options[1],
        };
    }

    if (indentSize === ESLINT_INDENT_DEFAULT && objectOption === null) {
        return [];
    } else if (objectOption === null) {
        return [indentSize];
    }

    return [indentSize, objectOption];
};
