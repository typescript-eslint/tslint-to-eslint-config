import { ResultStatus } from "../../types";
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
        const unknownPath = "unknown/path.txt";
        const dependencies = createStubDependencies();
        const settings = createSettings(unknownPath);

        // Act
        const result = await convertEditorConfigs(dependencies, settings);

        // Assert
        const error = expect.objectContaining({
            message: `Unknown editor config path requested: 'unknown/path.txt'.`,
        });
        expect(dependencies.reportEditorConfigConversionResults).toHaveBeenCalledWith({
            failed: new Map([[unknownPath, error]]),
            successes: new Map(),
        });
        expect(result).toEqual({
            errors: [error],
            status: ResultStatus.Failed,
        });
    });

    it("reports an error when converting an editor config reports an error", async () => {
        // Arrange
        const error = new Error("Oh no!");
        const dependencies = createStubDependencies({
            convertEditorConfig: jest.fn().mockResolvedValue(error),
        });
        const settings = createSettings(stubConfigPath);

        // Act
        const result = await convertEditorConfigs(dependencies, settings);

        // Assert
        expect(dependencies.reportEditorConfigConversionResults).toHaveBeenCalledWith({
            failed: new Map([[stubConfigPath, error]]),
            successes: new Map(),
        });
        expect(result).toEqual({
            errors: [error],
            status: ResultStatus.Failed,
        });
    });

    it("reports a success when converting an editor config reports a success", async () => {
        // Arrange
        const success = {
            contents: "Hello, world!",
            missing: [],
        };
        const dependencies = createStubDependencies({
            convertEditorConfig: jest.fn().mockResolvedValue(success),
        });
        const settings = createSettings(stubConfigPath);

        // Act
        const result = await convertEditorConfigs(dependencies, settings);

        // Assert
        expect(dependencies.reportEditorConfigConversionResults).toHaveBeenCalledWith({
            failed: new Map(),
            successes: new Map([[stubConfigPath, success]]),
        });
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });
});
