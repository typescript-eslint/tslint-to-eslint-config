import { describe, expect, it } from "@jest/globals";
import * as path from "path";

import { importer } from "./importer.js";

const stubCwd = "/path/to/cwd";

type StubImporterSettings = {
    files?: Record<string, string | Error>;
    modules?: Record<string, unknown>;
};

const createStubDependencies = ({ files = {}, modules = {} }: StubImporterSettings = {}) => {
    const fileSystem = {
        fileExists: async (filePath: string) => filePath in files,
        readFile: async (filePath: string) => files[filePath],
    };

    const getCwd = () => stubCwd;
    const nativeImporter = async (filePath: string) => modules[filePath];

    return { fileSystem, getCwd, nativeImporter };
};

describe("importer", () => {
    it("natively imports a non-JSON module when its relative path exists", async () => {
        // Arrange
        const moduleName = "./relative.js";
        const contents = { key: "value" };
        const dependencies = createStubDependencies({
            modules: {
                [moduleName]: contents,
            },
        });

        // Act
        const imported = await importer(dependencies, moduleName);

        // Assert
        expect(imported).toEqual(contents);
    });

    it("natively imports a non-JSON module when its cwd-joined path exists", async () => {
        // Arrange
        const moduleName = "./relative.js";
        const contents = { key: "value" };
        const dependencies = createStubDependencies({
            modules: {
                [path.join(stubCwd, moduleName)]: contents,
            },
        });

        // Act
        const imported = await importer(dependencies, moduleName);

        // Assert
        expect(imported).toEqual(contents);
    });

    it("reads a JSONC module when its relative path exists", async () => {
        // Arrange
        const moduleName = "./relative.json";
        const contents = { key: "value" };
        const dependencies = createStubDependencies({
            files: {
                [moduleName]: JSON.stringify(contents),
            },
        });

        // Act
        const imported = await importer(dependencies, moduleName);

        // Assert
        expect(imported).toEqual(contents);
    });

    it("reads a JSONC module when its cwd-joined path exists", async () => {
        // Arrange
        const moduleName = "./relative.json";
        const contents = { key: "value" };
        const dependencies = createStubDependencies({
            files: {
                [path.join(stubCwd, moduleName)]: JSON.stringify(contents),
            },
        });

        // Act
        const imported = await importer(dependencies, moduleName);

        // Assert
        expect(imported).toEqual(contents);
    });

    it("returns an error when reading a JSONC module gives an error", async () => {
        // Arrange
        const moduleName = "./relative.json";
        const error = new Error("NOPE, INVALID");
        const dependencies = createStubDependencies({
            files: {
                [moduleName]: error,
            },
        });

        // Act
        const imported = await importer(dependencies, moduleName);

        // Assert
        expect(imported).toEqual(error);
    });

    it("returns an error when parsing a JSONC module gives an error", async () => {
        // Arrange
        const moduleName = "./relative.json";
        const dependencies = createStubDependencies({
            files: {
                [moduleName]: "NOPE, INVALID",
            },
        });

        // Act
        const imported = await importer(dependencies, moduleName);

        // Assert
        expect(imported).toEqual(
            expect.objectContaining({
                message: "JSON5: invalid character 'O' at 1:2",
            }),
        );
    });

    it("returns an error when neither module locations exist for a path", async () => {
        // Arrange
        const moduleName = "./relative.json";
        const dependencies = createStubDependencies();

        // Act
        const imported = await importer(dependencies, moduleName);

        // Assert
        expect(imported).toEqual(
            expect.objectContaining({
                message: expect.stringContaining(`Could not find '${moduleName}' after trying:`),
            }),
        );
    });
});
