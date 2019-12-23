import { createStubFileSystem } from "../adapters/fileSystem.stub";
import {
    findEditorConfiguration,
    FindEditorConfigurationDependencies,
} from "./findEditorConfiguration";

const stubConfigPath = "temp/";

export const createStubImporter = (filePath = "") =>
    jest.fn().mockReturnValue(Promise.resolve(filePath));

const createStubDependencies = (overrides: Partial<FindEditorConfigurationDependencies> = {}) => ({
    importer: createStubImporter(stubConfigPath),
    fileSystem: createStubFileSystem(),
    ...overrides,
});

describe("findEditorConfiguration", () => {
    it("returns undefined when the file does not exist", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            fileSystem: {
                fileExists: async () => false,
            },
        });

        // Act
        const result = await findEditorConfiguration(dependencies, stubConfigPath);

        // Assert
        expect(result).toEqual(undefined);
    });

    it("returns an error when importer returns one", async () => {
        // Arrange
        const message = "error";
        const dependencies = createStubDependencies({
            importer: async () => {
                throw new Error(message);
            },
        });

        // Act
        const result = await findEditorConfiguration(dependencies, stubConfigPath);

        // Assert
        expect(result).toEqual(
            expect.objectContaining({
                message,
            }),
        );
    });

    it("reads from the given configuration path when one is provided", async () => {
        // Arrange
        const configPath = "/thePath";
        const dependencies = createStubDependencies();

        // Act
        await findEditorConfiguration(dependencies, configPath);

        // Assert
        expect(dependencies.importer).toHaveBeenLastCalledWith(configPath);
    });

    it("parses object from configuration path when read successfully", async () => {
        // Arrange
        const originalConfig = {
            "typescript.tsdk": "node_modules/typescript/lib",
            "editor.tabSize": 4,
            "editor.codeActionsOnSave": {
                "source.organizeImports": false,
            },
        };

        const dependencies = createStubDependencies({
            importer: async () => originalConfig,
        });

        // Act
        const result = await findEditorConfiguration(dependencies, stubConfigPath);

        // Assert
        expect(result).toEqual(originalConfig);
    });
});
