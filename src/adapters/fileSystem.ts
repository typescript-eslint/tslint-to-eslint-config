export type FileSystem = {
    fileExists: (filePath: string) => Promise<boolean>;
    directoryExists: (filePath: string) => Promise<boolean>;
    readFile: (filePath: string) => Promise<NodeJS.ErrnoException | string>;
    writeFile: (filePath: string, contents: string) => Promise<NodeJS.ErrnoException | undefined>;
};
