import glob from "glob";

export const globAsync = async (pattern: string) => {
    return new Promise<string[] | Error>((resolve) => {
        glob(pattern, (error, matches) => {
            resolve(error ?? matches);
        });
    });
};

export type GlobAsync = typeof globAsync;
