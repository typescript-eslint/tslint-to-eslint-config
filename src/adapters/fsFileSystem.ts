import * as fs from "fs";
import { promisify } from "util";

import { FileSystem } from "./fileSystem";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

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
            return (await readFile(filePath)).toString();
        } catch (error) {
            return error;
        }
    },
    writeFile: async (filePath: string, contents: string) => {
        try {
            return writeFile(filePath, contents);
        } catch (error) {
            return error;
        }
    },
};
