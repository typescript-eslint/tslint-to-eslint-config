import * as fs from "fs";
import { promisify } from "util";

import { FileSystem } from "./fileSystem";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

export const fsFileSystem: FileSystem = {
    fileExists: async (filePath: string) => {
        throw new Error("hi fileExists: " + filePath);
        try {
            return fs.existsSync(filePath);
        } catch (error) {
            return false;
        }
    },
    readFile: async (filePath: string) => {
        throw new Error("hi readFile: " + filePath);
        try {
            return (await readFile(filePath)).toString();
        } catch (error) {
            return error;
        }
    },
    writeFile: async (filePath: string, contents: string) => {
        throw new Error("hi writeFile: " + filePath);
        try {
            return writeFile(filePath, contents);
        } catch (error) {
            return error;
        }
    },
};
