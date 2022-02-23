import { describe, expect, it, jest } from "@jest/globals";

import { convertEditorConfig } from "./convertEditorConfig";

const stubPath = "./vscode/settings.json";

const stubSettings = {
    config: ".eslintrc.js",
};

describe("convertEditorConfig", () => {
    it("returns an error when reading the file fails", async () => {
        // Arrange
        const error = new Error("Oh no");
        const dependencies = {
            fileSystem: {
                readFile: async () => error,
                writeFile: async () => undefined,
            },
        };

        // Act
        const result = await convertEditorConfig(dependencies, jest.fn(), stubPath, stubSettings);

        // Assert
        expect(result).toEqual(error);
    });

    it("returns an error when writing to a file fails", async () => {
        // Arrange
        const originalFileContents = "Hello";
        const error = new Error("Oh no!");
        const converter = (input: string) => ({
            contents: `${input} world!`,
            missing: [],
        });
        const dependencies = {
            fileSystem: {
                readFile: async () => originalFileContents,
                writeFile: async () => error,
            },
        };

        // Act
        const result = await convertEditorConfig(dependencies, converter, stubPath, stubSettings);

        // Assert
        expect(result).toEqual(error);
    });

    it("returns the conversion data when writing to a file succeeds", async () => {
        // Arrange
        const originalFileContents = "Hello";
        const converter = (input: string) => ({
            contents: `${input} world!`,
            missing: [],
        });
        const dependencies = {
            fileSystem: {
                readFile: async () => originalFileContents,
                writeFile: async () => undefined,
            },
        };

        // Act
        const result = await convertEditorConfig(dependencies, converter, stubPath, stubSettings);

        // Assert
        expect(result).toEqual(converter(originalFileContents));
    });
});
