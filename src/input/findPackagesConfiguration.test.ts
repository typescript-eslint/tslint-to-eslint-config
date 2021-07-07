import { createStubExec } from "../adapters/exec.stubs";
import { findPackagesConfiguration } from "./findPackagesConfiguration";

describe("findPackagesConfiguration", () => {
    it("defaults the configuration file when one isn't provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec() };

        // Act
        await findPackagesConfiguration(dependencies, undefined);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(`cat "./package.json"`);
    });

    it("includes a configuration file in the packages command when one is provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec() };
        const config = "./custom/package.json";

        // Act
        await findPackagesConfiguration(dependencies, config);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(`cat "./custom/package.json"`);
    });

    it("applies packages defaults when none are provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec({ stdout: "{}" }) };
        const config = "./package.json";

        // Act
        const result = await findPackagesConfiguration(dependencies, config);

        // Assert
        expect(result).toEqual({
            dependencies: {},
            devDependencies: {},
        });
    });
});
