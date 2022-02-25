import { FileSystem } from "../adapters/fileSystem.js";
import { fn } from "../fn.js";

export const createStubFileSystem = ({ data = {}, exists = true } = {}) => ({
    fileExists: async () => exists,
    readFile: async () => data,
    writeFile: fn<FileSystem["writeFile"]>(),
});
