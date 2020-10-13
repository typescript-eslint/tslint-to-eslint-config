import { convertEditorConfigs, ConvertEditorConfigsDependencies } from "./convertEditorConfigs";

const stubConfigPath = "stub.json";

const stubEditorConfigDescriptors = [[stubConfigPath, jest.fn()]] as const;

const createStubDependencies = (overrides: Partial<ConvertEditorConfigsDependencies> = {}) => ({
    convertEditorConfig: jest.fn(),
    editorConfigDescriptors: stubEditorConfigDescriptors,
    reportEditorConfigConversionResults: jest.fn(),
    ...overrides,
});

const createSettings = (requestedPath?: string) => ({
    config: ".eslintrc.js",
    editor: requestedPath,
});

describe("convertEditorConfigs", () => {
    it("reports an error when an unknown editor config path is requested", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const settings = createSettings("unknown/path.txt");

        // Act
        await convertEditorConfigs(dependencies, settings);

        // Assert
        expect(dependencies.reportEditorConfigConversionResults).toHaveBeenCalledWith({
            failed: [
                expect.objectContaining({
                    message: `Unknown editor config path requested: 'unknown/path.txt'.`,
                }),
            ],
            successes: [stubConfigPath],
        });
    });

    it("reports an error when converting a requested editor config reports an error", async () => {
        // Arrange
        const error = new Error("Oh no!");
        const dependencies = createStubDependencies({
            convertEditorConfig: jest.fn().mockResolvedValue(error),
        });
        const settings = createSettings(stubConfigPath);

        // Act
        await convertEditorConfigs(dependencies, settings);

        // Assert
        expect(dependencies.reportEditorConfigConversionResults).toHaveBeenCalledWith({
            failed: [error],
            successes: [],
        });
    });

    it("reports a success when converting a requested editor config reports a success", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            convertEditorConfig: jest.fn().mockResolvedValue(undefined),
        });
        const settings = createSettings(stubConfigPath);

        // Act
        await convertEditorConfigs(dependencies, settings);

        // Assert
        expect(dependencies.reportEditorConfigConversionResults).toHaveBeenCalledWith({
            failed: [],
            successes: [stubConfigPath],
        });
    });

    it("does not report an error when converting a default editor config reports an error", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            convertEditorConfig: jest.fn().mockResolvedValue(new Error("Oh no!")),
        });
        const settings = createSettings();

        // Act
        await convertEditorConfigs(dependencies, settings);

        // Assert
        expect(dependencies.reportEditorConfigConversionResults).toHaveBeenCalledWith({
            failed: [],
            successes: [],
        });
    });

    it("reports a success when converting a default editor config reports a success", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            convertEditorConfig: jest.fn().mockResolvedValue(undefined),
        });
        const settings = createSettings();

        // Act
        await convertEditorConfigs(dependencies, settings);

        // Assert
        expect(dependencies.reportEditorConfigConversionResults).toHaveBeenCalledWith({
            failed: [],
            successes: [stubConfigPath],
        });
    });
});
