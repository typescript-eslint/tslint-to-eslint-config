import { createStubFileSystem } from "../adapters/fileSystem.stub";
import { convertFileComments, ConvertFileCommentsDependencies } from "./convertFileComments";

const createStubDependencies = (
    overrides: Partial<ConvertFileCommentsDependencies> = {},
): ConvertFileCommentsDependencies => ({
    fileSystem: createStubFileSystem(),
    replaceFileComments: jest.fn(),
    ...overrides,
});

describe("convertFileComments", () => {
    it("returns the failure result when reading the file fails", async () => {
        // Arrange
        const readFileError = new Error();
        const dependencies = createStubDependencies({
            fileSystem: {
                readFile: jest.fn().mockResolvedValueOnce(readFileError),
                writeFile: jest.fn(),
            },
        });

        // Act
        const result = await convertFileComments(dependencies, "src/index.ts", new Map());

        // Assert
        expect(result).toBe(readFileError);
    });

    it("returns the result from writing new file contents when reading the file succeeds", async () => {
        // Arrange
        const writeFileError = new Error();
        const dependencies = createStubDependencies({
            fileSystem: {
                readFile: jest.fn().mockResolvedValue(""),
                writeFile: jest.fn().mockResolvedValueOnce(writeFileError),
            },
        });

        // Act
        const result = await convertFileComments(dependencies, "src/index.ts", new Map());

        // Assert
        expect(result).toBe(writeFileError);
    });
});
