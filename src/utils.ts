export const isDefined = <Item>(item: Item | undefined): item is Item => item !== undefined;

export const isError = <Item>(item: Item | Error): item is Error => item instanceof Error;

export const isTruthy = <Item>(item: Item | false | undefined | null | 0): item is Item => !!item;

export const separateErrors = <Item>(mixed: (Error | Item)[]): [Error[], Item[]] => {
    const errors: Error[] = [];
    const items: Item[] = [];

    for (const item of mixed) {
        if (item instanceof Error) {
            errors.push(item);
        } else {
            items.push(item);
        }
    }

    return [errors, items];
};

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

export const uniqueFromSources = <T>(...sources: (T | T[] | undefined)[]) => {
    const items: T[] = [];

    for (const source of sources) {
        if (source instanceof Array) {
            items.push(...source.filter(isDefined));
        } else if (source !== undefined) {
            items.push(source);
        }
    }

    return Array.from(new Set(items));
};
