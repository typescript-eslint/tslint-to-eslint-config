export const withKeysSorted = <T extends Record<string, unknown>>(input: T) => {
    const output = {} as T;
    const keys: (keyof T)[] = Object.keys(input).sort((a, b) => a.localeCompare(b));

    for (const key of keys) {
        output[key] = input[key];
    }

    return output;
};
