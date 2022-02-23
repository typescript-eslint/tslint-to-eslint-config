import { FileSystem } from "../adapters/fileSystem";
import { fn } from "../fn";

export const createStubFileSystem = ({ data = {}, exists = true } = {}) => ({
    fileExists: async () => exists,
    readFile: async () => data,
    writeFile: fn<FileSystem["writeFile"]>(),
});
