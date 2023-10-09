import { describe, expect, it } from "@jest/globals";

import { createStubFileSystem } from "../adapters/fileSystem.stub";
import { fsFileSystem as fileSystem } from "../adapters/fsFileSystem";
import { collectCommentFileNames } from "./collectCommentFileNames";

const stubFoundConfiguration = {
    include: ["a.ts"],
};

describe("collectCommentFileNames", () => {
    it("returns an error result when filePathGlobs is true and typescriptConfiguration is undefined", async () => {
        const findTypeScriptConfiguration = async () => stubFoundConfiguration;

        const result = await collectCommentFileNames(
            { findTypeScriptConfiguration, fileSystem },
            true,
        );

        expect(result).toEqual(expect.any(Error));
    });

    it("returns the typescript configuration when filePathGlobs is true and typescriptConfiguration exists", async () => {
        const findTypeScriptConfiguration = async () => stubFoundConfiguration;
        const typescriptConfiguration = {
            include: ["a.ts"],
        };

        const result = await collectCommentFileNames(
            { findTypeScriptConfiguration, fileSystem },
            true,
            typescriptConfiguration,
        );

        expect(result).toEqual(typescriptConfiguration);
    });

    it("returns the input file paths when filePathGlobs is an array", async () => {
        const findTypeScriptConfiguration = async () => stubFoundConfiguration;
        const filePathGlobs = ["a.ts"];

        const result = await collectCommentFileNames(
            { findTypeScriptConfiguration, fileSystem },
            filePathGlobs,
        );

        expect(result).toEqual({
            include: filePathGlobs,
        });
    });

    it("returns the input file path when filePathGlobs is a source file path string", async () => {
        const findTypeScriptConfiguration = async () => ({
            include: ["a.ts"],
        });
        const filePathGlobs = "a.ts";

        const result = await collectCommentFileNames(
            { findTypeScriptConfiguration, fileSystem },
            filePathGlobs,
        );

        expect(result).toEqual({
            include: [filePathGlobs],
        });
    });

    it("returns the failure when filePathGlobs is a config file path string and reading it fails", async () => {
        const error = new Error("Failure!");
        const findTypeScriptConfiguration = async () => error;

        const result = await collectCommentFileNames(
            { findTypeScriptConfiguration, fileSystem },
            "tsconfig.json",
        );

        expect(result).toEqual(error);
    });

    it("returns the typescript configuration from disk when filePathGlobs is a config path string and reading it succeeds", async () => {
        const findTypeScriptConfiguration = async () => stubFoundConfiguration;

        const result = await collectCommentFileNames(
            { findTypeScriptConfiguration, fileSystem },
            "tsconfig.json",
        );

        expect(result).toEqual({
            include: ["a.ts"],
        });
    });

    it("returns only files when filePathGlobs includes directories", async () => {
        const findTypeScriptConfiguration = async () => ({
            include: ["directory"],
        });

        const result = await collectCommentFileNames(
            {
                findTypeScriptConfiguration,
                fileSystem: createStubFileSystem({ isDir: true }),
            },
            "tsconfig.json",
        );

        expect(result).toEqual({
            include: [],
        });
    });
});
