// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withKeysSorted = (input: any): Record<string, any> => {
    const output: Record<string, any> = {};
    const keys = Object.keys(input).sort((a, b) => a.localeCompare(b));

    for (const key of keys) {
        output[key] = input[key];
    }

    return output;
};
