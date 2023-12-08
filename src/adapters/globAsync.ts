import { glob } from "glob";

export const globAsync = async (pattern: string) => {
    return new Promise<Error | string[]>((resolve) => {
        glob(pattern, (error, matches) => {
            resolve(error ?? matches);
        });
    });
};

export type GlobAsync = typeof globAsync;
