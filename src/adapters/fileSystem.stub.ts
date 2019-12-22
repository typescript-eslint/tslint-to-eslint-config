export const createStubFileSystem = ({ data = {}, exists = true } = {}) => ({
    fileExists: jest.fn().mockReturnValue(exists),
    readFile: jest.fn().mockReturnValue(Promise.resolve(data)),
    writeFile: jest.fn(),
});

export const createStubThrowingFileSystem = ({ err = "" } = {}) => ({
    fileExists: jest.fn().mockRejectedValue(Promise.resolve(new Error(err))),
    readFile: jest.fn().mockRejectedValue(Promise.resolve(new Error(err))),
    writeFile: jest.fn().mockRejectedValue(Promise.resolve(new Error(err))),
});
