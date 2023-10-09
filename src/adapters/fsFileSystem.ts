import * as fs from "fs";

import { asError } from "../utils";
import { FileSystem } from "./fileSystem";

export const fsFileSystem: FileSystem = {
    fileExists: async (filePath: string) => {
        try {
            return fs.existsSync(filePath);
        } catch {
            return false;
        }
    },
    directoryExists: async (filePath: string) => {
        try {
            const stat = await fs.promises.stat(filePath);
            return stat.isDirectory();
        } catch (error) {
            return false;
        }
    },
    readFile: async (filePath: string) => {
        try {
            return (await fs.promises.readFile(filePath)).toString();
        } catch (error) {
            return asError(error);
        }
    },
    writeFile: async (filePath: string, contents: string) => {
        try {
            await fs.promises.writeFile(filePath, contents);
            return undefined;
        } catch (error) {
            return asError(error);
        }
    },
};
