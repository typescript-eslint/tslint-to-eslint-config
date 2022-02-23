import { describe, expect, it } from "@jest/globals";

import { resolveExtensionNames } from "./resolveExtensionNames";

describe("resolveExtensionNames", () => {
    it("returns a single plugin name as an array when given a single string", () => {
        // Arrange
        const rawExtensionName = "eslint-plugin-linting";

        // Act
        const extensionNames = resolveExtensionNames(rawExtensionName);

        // Assert
        expect(extensionNames).toEqual([rawExtensionName]);
    });

    it("returns multiple plugin names as an array when given an array", () => {
        // Arrange
        const rawExtensionNames = ["eslint-plugin-one", "eslint-plugin-two"];

        // Act
        const extensionNames = resolveExtensionNames(rawExtensionNames);

        // Assert
        expect(extensionNames).toEqual(rawExtensionNames);
    });

    it("prepends eslint-plugin- when a plugin doesn't start with it", () => {
        // Arrange
        const rawExtensionName = "custom";

        // Act
        const extensionNames = resolveExtensionNames(rawExtensionName);

        // Assert
        expect(extensionNames).toEqual(["eslint-plugin-custom"]);
    });

    it("doesn't prepend eslint-plugin- when a plugin starts with .", () => {
        // Arrange
        const rawExtensionName = "../my-config.js";

        // Act
        const extensionNames = resolveExtensionNames(rawExtensionName);

        // Assert
        expect(extensionNames).toEqual(["../my-config.js"]);
    });

    it("doesn't prepend eslint-plugin- when a plugin starts with t-plugin-", () => {
        // Arrange
        const rawExtensionName = "eslint-plugin-value";

        // Act
        const extensionNames = resolveExtensionNames(rawExtensionName);

        // Assert
        expect(extensionNames).toEqual(["eslint-plugin-value"]);
    });

    it("doesn't prepend eslint-plugin- when a plugin starts with eslint:", () => {
        // Arrange
        const rawExtensionName = "eslint:recommended";

        // Act
        const extensionNames = resolveExtensionNames(rawExtensionName);

        // Assert
        expect(extensionNames).toEqual(["eslint:recommended"]);
    });

    it("doesn't prepend eslint-plugin- when a plugin starts with plugin:", () => {
        // Arrange
        const rawExtensionName = "eslint:recommended";

        // Act
        const extensionNames = resolveExtensionNames(rawExtensionName);

        // Assert
        expect(extensionNames).toEqual(["eslint:recommended"]);
    });
});
