import JSON5 from "json5";

export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export const isDefined = <Item>(item: Item | undefined): item is Item => item !== undefined;

export const isError = <Item>(item: Item | Error): item is Error => item instanceof Error;

export const isTruthy = <Item>(item: Item | false | undefined | null | 0): item is Item => !!item;

export const removeEmptyMembers = <T extends Record<string, unknown>>(items: T): T => {
    const result = {} as T;

    for (const [key, value] of Object.entries(items) as Entries<T>) {
        if (
            !(value instanceof Array && value.length === 0) &&
            !(value instanceof Object && Object.keys(value).length === 0)
        ) {
            result[key] = value;
        }
    }

    return result;
};

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

export const parseJson = (text: string) => JSON5.parse(text);
