import { findTSLintConfiguration } from "./findTSLintConfiguration";
import { createStubExec } from "../adapters/exec.stubs";

describe("findTSLintConfiguration", () => {
    it("defaults the configuration file when one isn't provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec() };

        // Act
        await findTSLintConfiguration(dependencies, undefined);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith("tslint --print-config ./tslint.json");
    });

    it("includes a configuration file in the TSLint command when one is provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec() };
        const config = "./custom/tslint.json";

        // Act
        await findTSLintConfiguration(dependencies, config);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(
            "tslint --print-config ./custom/tslint.json",
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
            ruleDirectories: [],
            rules: {},
        });
    });
});
