import { FileSystem } from "../adapters/fileSystem";
import { fn } from "../fn";

export const createStubFileSystem = ({ data = {}, exists = true, isDir = false } = {}) => ({
    fileExists: async () => exists,
    directoryExists: async () => exists && isDir,
    readFile: async () => data,
    writeFile: fn<FileSystem["writeFile"]>(),
});
