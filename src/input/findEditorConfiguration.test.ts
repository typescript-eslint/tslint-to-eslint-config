import { createStubFileSystem, createStubThrowingFileSystem } from "../adapters/fileSystem.stub";
import {
    findEditorConfiguration,
    FindEditorConfigurationDependencies,
} from "./findEditorConfiguration";

const createStubDependencies = (overrides: Partial<FindEditorConfigurationDependencies> = {}) => ({
    fileSystem: createStubFileSystem(),
    ...overrides,
});

const stubConfigPath = "temp/";

describe("findEditorConfiguration", () => {
    it("returns an error when fileSystem returns one", async () => {
        // Arrange
        const message = "error";
        const dependencies = createStubDependencies({
            fileSystem: createStubFileSystem({ data: new Error(message) }),
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

    it("returns an error when fileSystem throws one", async () => {
        // Arrange
        const message = "error";
        const dependencies = createStubDependencies({
            fileSystem: createStubThrowingFileSystem({ err: message }),
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
        expect(dependencies.fileSystem.readFile).toHaveBeenLastCalledWith(configPath);
    });

    it("defaults to VS Code editor settings path when config path isn't provided", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        await findEditorConfiguration(dependencies, undefined);

        // Assert
        expect(dependencies.fileSystem.readFile).toHaveBeenLastCalledWith(".vscode/settings.json");
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
        const data = JSON.stringify(originalConfig);
        const dependencies = createStubDependencies({
            fileSystem: createStubFileSystem({ data }),
        });

        // Act
        const result = await findEditorConfiguration(dependencies, stubConfigPath);

        // Assert
        expect(result).toEqual(originalConfig);
    });
});
