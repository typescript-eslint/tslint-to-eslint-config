export const isDefined = <Item>(item: Item | undefined): item is Item => !!item;

export const isError = <Item>(item: Item | Error): item is Error => item instanceof Error;

export type RemoveErrors<Items> = {
    [P in keyof Items]: Exclude<Items[P], Error>;
};

export type PromiseValue<T> = T extends Promise<infer R> ? R : never;
