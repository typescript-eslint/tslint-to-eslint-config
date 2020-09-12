import { createStubOriginalConfigurationsData } from "../../settings.stubs";
import { ResultStatus } from "../../types";
import { convertComments, ConvertCommentsDependencies } from "./convertComments";

const createStubDependencies = (
    overrides: Partial<ConvertCommentsDependencies> = {},
): ConvertCommentsDependencies => ({
    convertFileComments: jest.fn(),
    globAsync: jest.fn().mockResolvedValue(["src/a.ts", "src/b.ts"]),
    reportCommentResults: jest.fn(),
    ...overrides,
});

describe("convertComments", () => {
    it("returns an empty result when --comments is not provided", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await convertComments(
            dependencies,
            { comments: undefined },
            createStubOriginalConfigurationsData(),
        );

        // Assert
        expect(dependencies.reportCommentResults).toHaveBeenCalledWith();
        expect(result).toEqual({
            data: undefined,
            status: ResultStatus.Succeeded,
        });
    });

    it("returns an error when --comments is given as a boolean value without a TypeScript configuration", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await convertComments(
            dependencies,
            { comments: true },
            createStubOriginalConfigurationsData(),
        );

        // Assert
        expect(result).toEqual({
            errors: expect.arrayContaining([expect.any(Error)]),
            status: ResultStatus.Failed,
        });
    });

    it("includes TypeScript files when --comments is given as a boolean value with a TypeScript files configuration", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            globAsync: jest.fn().mockResolvedValue(["src/a.ts"]),
        });

        // Act
        const result = await convertComments(
            dependencies,
            { comments: true },
            createStubOriginalConfigurationsData({
                typescript: {
                    files: ["src/a.ts"],
                },
            }),
        );

        // Assert
        expect(dependencies.reportCommentResults).toHaveBeenCalledWith(["src/a.ts"]);
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });

    it("includes TypeScript inclusions when --comments is given as a boolean value with a TypeScript include configuration", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await convertComments(
            dependencies,
            { comments: true },
            createStubOriginalConfigurationsData({
                typescript: {
                    include: ["src/*.ts"],
                },
            }),
        );

        // Assert
        expect(dependencies.reportCommentResults).toHaveBeenCalledWith(["src/a.ts", "src/b.ts"]);
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });

    it("excludes TypeScript exclusions when --comments is given as a boolean value with a TypeScript excludes configuration", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await convertComments(
            dependencies,
            { comments: true },
            createStubOriginalConfigurationsData({
                typescript: {
                    exclude: ["src/b.ts"],
                    include: ["src/*.ts"],
                },
            }),
        );

        // Assert
        expect(dependencies.reportCommentResults).toHaveBeenCalledWith(["src/a.ts"]);
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });

    it("returns an error when there are no file path globs", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await convertComments(
            dependencies,
            { comments: [] },
            createStubOriginalConfigurationsData(),
        );

        // Assert
        expect(result).toEqual({
            errors: expect.arrayContaining([expect.any(Error)]),
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
            { comments: ["*.ts"] },
            createStubOriginalConfigurationsData(),
        );

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
        const result = await convertComments(
            dependencies,
            { comments: ["*.ts"] },
            createStubOriginalConfigurationsData(),
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
        );

        // Assert
        expect(dependencies.reportCommentResults).toHaveBeenCalledWith(["src/a.ts", "src/b.ts"]);
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });
});
