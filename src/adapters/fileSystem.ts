export type FileSystem = {
    fileExists: (filePath: string) => Promise<boolean>;
    readFile: (filePath: string) => Promise<Error | string>;
    writeFile: (filePath: string, contents: string) => Promise<Error | undefined>;
};
