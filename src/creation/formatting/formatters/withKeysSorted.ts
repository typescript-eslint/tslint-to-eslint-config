export const withKeysSorted = (input: any) => {
    return Object.fromEntries(
        Object.keys(input)
            .sort((a, b) => a.localeCompare(b))
            .map(key => [key, input[key]]),
    );
};
