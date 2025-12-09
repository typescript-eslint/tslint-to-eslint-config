import { describe, expect, it } from "@jest/globals";

import { ResultStatus } from "../../types";
import { extractGlobPaths, ExtractGlobPathsDependencies } from "./extractGlobPaths";

const createStubDependencies = (
    overrides: Partial<ExtractGlobPathsDependencies> = {},
): ExtractGlobPathsDependencies => ({
    globAsync: async () => ["a.ts", "b.ts"],
    ...overrides,
});

describe("extractGlobPaths", () => {
    it("returns the failure result when a file path glob fails", async () => {
        // Arrange
        const globAsyncError = new Error();
        const dependencies = createStubDependencies({
            globAsync: async () => globAsyncError,
        });

        // Act
        const result = await extractGlobPaths(dependencies, {
            include: ["src/*.ts"],
        });

        // Assert
        expect(result).toEqual({
            errors: [globAsyncError],
            status: ResultStatus.Failed,
        });
    });

    it("returns an error when there are no resultant file paths", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            globAsync: async () => [],
        });

        // Act
        const result = await extractGlobPaths(dependencies, {
            include: ["src/*.ts"],
        });

        // Assert
        expect(result).toEqual({
            errors: expect.arrayContaining([expect.any(Error)]),
            status: ResultStatus.Failed,
        });
    });

    it("returns an error when all globbed file paths are excluded", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            globAsync: async () => ["a.ts"],
        });

        // Act
        const result = await extractGlobPaths(dependencies, {
            exclude: ["a.ts"],
            include: ["*.ts"],
        });

        // Assert
        expect(result).toEqual({
            errors: expect.arrayContaining([expect.any(Error)]),
            status: ResultStatus.Failed,
        });
    });

    it("returns the paths when unique file paths are not excluded", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            globAsync: async () => ["a.ts"],
        });

        // Act
        const result = await extractGlobPaths(dependencies, { include: ["*.ts"] });

        // Assert
        expect(result).toEqual({
            data: ["a.ts"],
            status: ResultStatus.Succeeded,
        });
    });
});
