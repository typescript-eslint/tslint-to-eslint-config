import * as fs from "fs";

export type ReadDirOptions = { encoding?: string | null; withFileTypes: true };

export type FileSystem = {
    fileExists: (filePath: string) => Promise<boolean>;
    readFile: (filePath: string) => Promise<Error | string>;
    writeFile: (filePath: string, contents: string) => Promise<Error | undefined>;
    readDir: (dirPath: string, options: ReadDirOptions) => Promise<Error | fs.Dirent[]>;
};
