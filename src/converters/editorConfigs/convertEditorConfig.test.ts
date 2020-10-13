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
                readFile: jest.fn().mockResolvedValue(error),
                writeFile: jest.fn(),
            },
        };

        // Act
        const result = await convertEditorConfig(dependencies, jest.fn(), stubPath, stubSettings);

        // Assert
        expect(result).toEqual(error);
    });

    it("writes the file when conversion succeeds", async () => {
        // Arrange
        const originalFileContents = "Hello";
        const converter = (input: string) => `${input} world!`;
        const dependencies = {
            fileSystem: {
                readFile: jest.fn().mockResolvedValue(originalFileContents),
                writeFile: jest.fn(),
            },
        };

        // Act
        await convertEditorConfig(dependencies, converter, stubPath, stubSettings);

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(stubPath, "Hello world!");
    });
});
