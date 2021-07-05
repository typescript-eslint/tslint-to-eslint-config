import { createStubFileSystem } from "../adapters/fileSystem.stub";
import { findPackagesConfiguration } from "./findPackagesConfiguration";

describe("findPackagesConfiguration", () => {
    it("defaults the configuration file when one isn't provided", async () => {
        // Arrange
        const dependencies = {
            fileSystem: createStubFileSystem({
                data: "{}"
            })
        }

        // Act
        await findPackagesConfiguration(dependencies, undefined);

        // Assert
        expect(dependencies.fileSystem.readFile).toHaveBeenLastCalledWith(`./package.json`);
    });

    it("uses te configuration file from the packages command when one is provided", async () => {
        // Arrange
        const dependencies = {
            fileSystem: createStubFileSystem({
                data: "{}"
            })
        }
        const config = "./custom/package.json";

        // Act
        await findPackagesConfiguration(dependencies, config);

        // Assert
        expect(dependencies.fileSystem.readFile).toHaveBeenLastCalledWith(`./custom/package.json`);
    });

    it("applies packages defaults when none are provided", async () => {
        // Arrange
        const dependencies = {
            fileSystem: createStubFileSystem({
                data: "{}"
            })
        }
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
