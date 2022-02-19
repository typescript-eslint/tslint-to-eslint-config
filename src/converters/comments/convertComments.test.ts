import { jest } from "@jest/globals";

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
    extractGlobPaths: jest.fn().mockResolvedValue({
        data: ["a.ts", "b.ts"],
        status: ResultStatus.Succeeded,
    }),
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
            new Map<string, string[]>(),
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
            new Map<string, string[]>(),
        );

        // Assert
        expect(result).toEqual({
            errors: [error],
            status: ResultStatus.Failed,
        });
    });

    it("returns the failure result when a globbing file paths fails", async () => {
        // Arrange
        const globAsyncError = new Error();
        const dependencies = createStubDependencies({
            extractGlobPaths: jest.fn().mockResolvedValueOnce({
                errors: [globAsyncError],
                status: ResultStatus.Failed,
            }),
        });

        // Act
        const result = await convertComments(
            dependencies,
            { comments: true },
            createStubOriginalConfigurationsData(),
            new Map<string, string[]>(),
        );

        // Assert
        expect(result).toEqual({
            errors: [globAsyncError],
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
            new Map<string, string[]>(),
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
            new Map<string, string[]>(),
        );

        // Assert
        expect(result).toEqual({
            data: ["a.ts", "b.ts"],
            status: ResultStatus.Succeeded,
        });
    });
});
