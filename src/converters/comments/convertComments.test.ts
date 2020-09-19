import { createStubOriginalConfigurationsData } from "../../settings.stubs";
import { ResultStatus } from "../../types";
import { convertComments, ConvertCommentsDependencies } from "./convertComments";

const createStubDependencies = (
    overrides: Partial<ConvertCommentsDependencies> = {},
): ConvertCommentsDependencies => ({
    collectCommentFileNames: async () => ({
        include: ["a.ts"],
    }),
    convertFileComments: jest.fn(),
    globAsync: jest.fn().mockResolvedValue(["a.ts", "b.ts"]),
    reportCommentResults: jest.fn(),
    ...overrides,
});

describe("convertComments", () => {
    it("returns an empty result when comments is undefined", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await convertComments(
            dependencies,
            { comments: undefined },
            createStubOriginalConfigurationsData(),
            new Map(),
        );

        // Assert
        expect(result).toEqual({
            data: undefined,
            status: ResultStatus.Succeeded,
        });
    });

    it("returns the failure result when collectCommentFileNames fails", async () => {
        // Arrange
        const error = new Error("Failure!");
        const dependencies = createStubDependencies({
            collectCommentFileNames: async () => error,
        });

        // Act
        const result = await convertComments(
            dependencies,
            { comments: true },
            createStubOriginalConfigurationsData(),
            new Map(),
        );

        // Assert
        expect(result).toEqual({
            errors: [error],
            status: ResultStatus.Failed,
        });
    });

    it("returns the failure result when a file path glob fails", async () => {
        // Arrange
        const globAsyncError = new Error();
        const dependencies = createStubDependencies({
            globAsync: jest.fn().mockResolvedValueOnce(globAsyncError),
        });

        // Act
        const result = await convertComments(
            dependencies,
            { comments: true },
            createStubOriginalConfigurationsData({
                typescript: {
                    include: ["src/*.ts"],
                },
            }),
            new Map(),
        );

        // Assert
        expect(result).toEqual({
            errors: [globAsyncError],
            status: ResultStatus.Failed,
        });
    });

    it("returns an error when there are no resultant file paths", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            collectCommentFileNames: async () => ({
                include: [],
            }),
            globAsync: jest.fn().mockResolvedValueOnce([]),
        });

        // Act
        const result = await convertComments(
            dependencies,
            { comments: [] },
            createStubOriginalConfigurationsData(),
            new Map(),
        );

        // Assert
        expect(result).toEqual({
            errors: expect.arrayContaining([expect.any(Error)]),
            status: ResultStatus.Failed,
        });
    });

    it("returns an error when all globbed file paths are excluded", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            collectCommentFileNames: async () => ({
                exclude: ["*.ts"],
                include: ["a.ts"],
            }),
            globAsync: jest.fn().mockResolvedValueOnce(["a.ts"]),
        });

        // Act
        const result = await convertComments(
            dependencies,
            { comments: ["*.ts"] },
            createStubOriginalConfigurationsData(),
            new Map(),
        );

        // Assert
        expect(result).toEqual({
            errors: expect.arrayContaining([expect.any(Error)]),
            status: ResultStatus.Failed,
        });
    });

    it("returns the failure result when a file conversion fails", async () => {
        // Arrange
        const fileConversionError = new Error("Failure!");
        const dependencies = createStubDependencies({
            convertFileComments: jest.fn().mockResolvedValueOnce(fileConversionError),
        });

        // Act
        const result = await convertComments(
            dependencies,
            { comments: ["*.ts"] },
            createStubOriginalConfigurationsData(),
            new Map(),
        );

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
        const result = await convertComments(
            dependencies,
            { comments: ["*.ts"] },
            createStubOriginalConfigurationsData(),
            new Map(),
        );

        // Assert
        expect(result).toEqual({
            data: ["a.ts", "b.ts"],
            status: ResultStatus.Succeeded,
        });
    });
});
