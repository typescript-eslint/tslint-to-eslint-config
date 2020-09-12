export const withKeysSorted = (input: any) => {
    const output: Record<string, any> = {};
    const keys = Object.keys(input).sort((a, b) => a.localeCompare(b));

    for (const key of keys) {
        output[key] = input[key];
    }

    return output;
};
