import { ResultStatus } from "../types";
import { convertComments, ConvertCommentsDependencies } from "./convertComments";

const createStubDependencies = (
    overrides: Partial<ConvertCommentsDependencies> = {},
): ConvertCommentsDependencies => ({
    convertFileComments: jest.fn(),
    globAsync: jest.fn().mockResolvedValue(["src/index.ts"]),
    ...overrides,
});

describe("convertComments", () => {
    it("returns a successful result when there are no file path globs", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await convertComments(dependencies, []);

        // Assert
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });

    it("returns the failure result when a file path glob fails", async () => {
        // Arrange
        const globAsyncError = new Error();
        const dependencies = createStubDependencies({
            globAsync: jest.fn().mockResolvedValueOnce(globAsyncError),
        });

        // Act
        const result = await convertComments(dependencies, ["*.ts"]);

        // Assert
        expect(result).toEqual({
            errors: [globAsyncError],
            status: ResultStatus.Failed,
        });
    });

    it("returns the failure result when a file conversion fails", async () => {
        // Arrange
        const fileConversionError = new Error();
        const dependencies = createStubDependencies({
            convertFileComments: jest.fn().mockResolvedValueOnce(fileConversionError),
        });

        // Act
        const result = await convertComments(dependencies, ["*.ts"]);

        // Assert
        expect(result).toEqual({
            errors: [fileConversionError],
            status: ResultStatus.Failed,
        });
    });

    it("returns a success result when all steps succeed", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await convertComments(dependencies, ["*.ts"]);

        // Assert
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });
});
