import { describe, expect, it } from "@jest/globals";

import { choosePackageManager } from "./choosePackageManager.js";
import { PackageManager } from "./packageManagers.js";

describe("choosePackageManager", () => {
    it("uses a non-npm package manager when that package manager's lock file exists", async () => {
        // Arrange
        const fileSystem = {
            fileExists: async (fileName: string) => fileName === "./yarn.lock",
        };

        // Act
        const result = await choosePackageManager({ fileSystem });

        // Assert
        expect(result).toEqual(PackageManager.Yarn);
    });

    it("uses npm when no lock file exists", async () => {
        // Arrange
        const fileSystem = {
            fileExists: async () => false,
        };

        // Act
        const result = await choosePackageManager({ fileSystem });

        // Assert
        expect(result).toEqual(PackageManager.npm);
    });
});
