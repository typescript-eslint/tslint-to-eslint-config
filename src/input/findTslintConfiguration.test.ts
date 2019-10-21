import {
    findTSLintConfiguration,
    FindTSLintConfigurationDependencies,
} from "./findTSLintConfiguration";
import { createStubExec, createStubThrowingExec } from "../adapters/exec.stubs";

const createStubDependencies = (overrides: Partial<FindTSLintConfigurationDependencies> = {}) => ({
    exec: createStubExec({ stdout: "{}" }),
    importer: async () => ({}),
    ...overrides,
});

describe("findTSLintConfiguration", () => {
    it("returns an error when exec returns one", async () => {
        // Arrange
        const stderr = "error";
        const dependencies = createStubDependencies({
            exec: createStubThrowingExec({ stderr }),
        });

        // Act
        const result = await findTSLintConfiguration(dependencies, undefined);

        // Assert
        expect(result).toEqual(
            expect.objectContaining({
                message: stderr,
            }),
        );
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
        const result = await findTSLintConfiguration(dependencies, undefined);

        // Assert
        expect(result).toEqual(
            expect.objectContaining({
                message,
            }),
        );
    });

    it("replaces an error with a v5.18 request when the --print-config option is unsupported", async () => {
        // Arrange
        const stderr = "unknown option `--print-config";
        const dependencies = createStubDependencies({
            exec: createStubThrowingExec({ stderr }),
        });

        // Act
        const result = await findTSLintConfiguration(dependencies, undefined);

        // Assert
        expect(result).toEqual(
            expect.objectContaining({
                message: "TSLint v5.18 required. Please update your version.",
            }),
        );
    });

    it("defaults the configuration file when one isn't provided", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            exec: createStubExec(),
        });

        // Act
        await findTSLintConfiguration(dependencies, undefined);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(`tslint --print-config "./tslint.json"`);
    });

    it("includes a configuration file in the TSLint command when one is provided", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            exec: createStubExec(),
        });
        const config = "./custom/tslint.json";

        // Act
        await findTSLintConfiguration(dependencies, config);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(
            `tslint --print-config "./custom/tslint.json"`,
        );
    });

    it("applies TSLint defaults when none are provided", async () => {
        // Arrange
        const raw = {
            extends: ["raw", "duplicated"],
        };
        const reportedExtends = ["reported", "duplicated"];
        const dependencies = createStubDependencies({
            exec: createStubExec({
                stdout: JSON.stringify({
                    extends: reportedExtends,
                }),
            }),
            importer: async () => raw,
        });
        const config = "./custom/tslint.json";

        // Act
        const result = await findTSLintConfiguration(dependencies, config);

        // Assert
        expect(result).toEqual({
            full: {
                extends: ["raw", "duplicated", "reported"],
                rulesDirectory: [],
                rules: {},
            },
            raw,
        });
    });
});
