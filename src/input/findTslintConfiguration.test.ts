import { findTSLintConfiguration } from "./findTSLintConfiguration";
import { createStubExec, createStubThrowingExec } from "../adapters/exec.stubs";

describe("findTSLintConfiguration", () => {
    it("returns an error when one occurs", async () => {
        // Arrange
        const stderr = "error";
        const dependencies = { exec: createStubThrowingExec({ stderr }) };

        // Act
        const result = await findTSLintConfiguration(dependencies, undefined);

        // Assert
        expect(result).toEqual(
            expect.objectContaining({
                message: stderr,
            }),
        );
    });

    it("replaces an error with a v5.18 request when the --print-config option is unsupported", async () => {
        // Arrange
        const stderr = "unknown option `--print-config";
        const dependencies = { exec: createStubThrowingExec({ stderr }) };

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
        const dependencies = { exec: createStubExec() };

        // Act
        await findTSLintConfiguration(dependencies, undefined);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(`tslint --print-config "./tslint.json"`);
    });

    it("includes a configuration file in the TSLint command when one is provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec() };
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
        const dependencies = { exec: createStubExec({ stdout: "{}" }) };
        const config = "./custom/tslint.json";

        // Act
        const result = await findTSLintConfiguration(dependencies, config);

        // Assert
        expect(result).toEqual({
            rulesDirectory: [],
            rules: {},
        });
    });
});
