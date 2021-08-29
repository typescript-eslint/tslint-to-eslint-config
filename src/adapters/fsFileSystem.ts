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
