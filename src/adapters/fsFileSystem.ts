import * as fs from "fs";
import { promisify } from "util";

import { FileSystem } from "./fileSystem";

export const fsFileSystem: FileSystem = {
    fileExists: async (filePath: string) => {
        try {
            return fs.existsSync(filePath);
        } catch (error) {
            return false;
        }
    },
    readFile: async (filePath: string) => {
        try {
            const readFile = promisify(fs.readFile);
            return (await readFile(filePath)).toString();
        } catch (error) {
            return error;
        }
    },
    writeFile: async (filePath: string, contents: string) => {
        try {
            return fs.promises.writeFile(filePath, contents);
        } catch (error) {
            return error;
        }
    },
};
