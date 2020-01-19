export const isDefined = <Item>(item: Item | undefined): item is Item => !!item;

export const isError = <Item>(item: Item | Error): item is Error => item instanceof Error;

export type RemoveErrors<Items> = {
    [P in keyof Items]: Exclude<Items[P], Error>;
};

export type PromiseValue<T> = T extends Promise<infer R> ? R : never;

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
