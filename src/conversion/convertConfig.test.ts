import { ResultStatus, TSLintToESLintSettings } from "../types";
import { createStubLogger } from "../adapters/logger.stubs";
import { convertConfig, ConvertConfigDependencies } from "./convertConfig";

const createStubDependencies = (overrides: Partial<ConvertConfigDependencies> = {}) => ({
    createNewConfiguration: jest.fn().mockReturnValue(Promise.resolve()),
    fileSystem: { fileExists: jest.fn().mockReturnValue(Promise.resolve(true)) },
    findTslintConfiguration: jest.fn().mockReturnValue(Promise.resolve(new Error())),
    logger: createStubLogger(),
    reportConversionResults: jest.fn(),
    ...overrides,
});

const createStubSettings = (settings: Partial<TSLintToESLintSettings> = {}) => ({
    ...settings,
});

describe("convertConfig", () => {
    it("complains when the provided config file does not exist", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            fileSystem: {
                fileExists: jest.fn().mockReturnValue(Promise.resolve(false)),
            },
        });
        const settings = createStubSettings();

        // Act
        const result = await convertConfig(dependencies, settings);

        // Assert
        expect(result).toEqual({
            complaint: `./tslint.json does not seem to exist.`,
            status: ResultStatus.ConfigurationError,
        });
    });

    it("searches for settings.config when settings.config is provided", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const settings = createStubSettings({
            config: "./stub/tslint.json",
        });

        // Act
        await convertConfig(dependencies, settings);

        // Assert
        expect(dependencies.findTslintConfiguration).toHaveBeenLastCalledWith(settings.config);
    });

    it("searches for ./tslint.json by default when no settings.config is provided", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const settings = createStubSettings();

        // Act
        await convertConfig(dependencies, settings);

        // Assert
        expect(dependencies.findTslintConfiguration).toHaveBeenLastCalledWith("./tslint.json");
    });

    it("returns a failure result when findTslintConfiguration returns an error", async () => {
        // Arrange
        const error = new Error("oh no");
        const dependencies = createStubDependencies({
            findTslintConfiguration: jest.fn().mockReturnValue(Promise.resolve(error)),
        });
        const settings = createStubSettings();

        // Act
        const result = await convertConfig(dependencies, settings);

        // Assert
        expect(result).toEqual({
            error,
            status: ResultStatus.Failed,
        });
    });

    it("creates a new configuration when findTslintConfiguration returns rules", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            findTslintConfiguration: jest.fn().mockReturnValue({
                rules: {
                    "sample-rule": {
                        ruleArguments: ["one", "two"],
                        ruleName: "sample-rule",
                    },
                },
            }),
        });
        const settings = createStubSettings();

        // Act
        const result = await convertConfig(dependencies, settings);

        // Assert
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });
});
