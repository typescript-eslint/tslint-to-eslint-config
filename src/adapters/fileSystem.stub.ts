import { jest } from "@jest/globals";

export const createStubFileSystem = ({ data = {}, exists = true } = {}) => ({
    fileExists: jest.fn().mockReturnValue(exists),
    readFile: jest.fn().mockReturnValue(Promise.resolve(data)),
    writeFile: jest.fn(),
});
