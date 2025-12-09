import { glob } from "glob";

export const globAsync = async (pattern: string) => {
    return new Promise<Error | string[]>((resolve) => {
        /* eslint-disable */
        // @ts-expect-error -- Will be removed in #1886.
        glob(pattern, (error, matches) => {
            resolve(error ?? matches);
        });
        /* eslint-enable */
    });
};

export type GlobAsync = typeof globAsync;
