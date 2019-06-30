import { findESLintConfiguration } from "./findESLintConfiguration";
import { createStubExec } from "../adapters/exec.stubs";

describe("findESLintConfiguration", () => {
    it("defaults the configuration file when one isn't provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec() };

        // Act
        await findESLintConfiguration(dependencies, undefined);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith("eslint --print-config ./eslintrc.js");
    });

    it("includes a configuration file in the ESLint command when one is provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec() };
        const config = "./custom/eslintrc.js";

        // Act
        await findESLintConfiguration(dependencies, config);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(
            "eslint --print-config ./custom/eslintrc.js",
        );
    });

    it("applies ESLint defaults when none are provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec({ stdout: "{}" }) };
        const config = "./custom/eslintrc.js";

        // Act
        const result = await findESLintConfiguration(dependencies, config);

        // Assert
        expect(result).toEqual({});
    });
});
