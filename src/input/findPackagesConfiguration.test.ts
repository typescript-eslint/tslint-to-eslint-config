import { describe, expect, it } from "@jest/globals";

import { createStubExec } from "../adapters/exec.stubs.js";
import { findPackagesConfiguration } from "./findPackagesConfiguration.js";

describe("findPackagesConfiguration", () => {
    it("defaults the configuration file with cat when one isn't provided on a non-Windows platform", async () => {
        // Arrange
        const dependencies = { exec: createStubExec(), platform: "darwin" };

        // Act
        await findPackagesConfiguration(dependencies, undefined);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(`cat "./package.json"`);
    });

    it("defaults the configuration file with type when one isn't provided on a Windows platform", async () => {
        // Arrange
        const dependencies = { exec: createStubExec(), platform: "win32" };

        // Act
        await findPackagesConfiguration(dependencies, undefined);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(`type "./package.json"`);
    });

    it("includes a configuration file in the packages command when one is provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec(), platform: "darwin" };
        const config = "./custom/package.json";

        // Act
        await findPackagesConfiguration(dependencies, config);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(`cat "./custom/package.json"`);
    });

    it("applies packages defaults when none are provided", async () => {
        // Arrange
        const dependencies = { exec: createStubExec({ stdout: "{}" }), platform: "darwin" };
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
