import { retrieveExtendsValues } from "./retrieveExtendsValues";

describe("retrieveExtendsValues", () => {
    it("retrieves eslint-all when an extension is named eslint:all", async () => {
        // Arrange
        const eslintAll = { rules: {} };
        const importer = async (extensionName: string) =>
            extensionName === "eslint/conf/eslint-all"
                ? eslintAll
                : new Error(`Unknown extension name: '${extensionName}`);

        // Act
        const { importedExtensions } = await retrieveExtendsValues({ importer }, "eslint:all");

        // Assert
        expect(importedExtensions).toEqual([eslintAll]);
    });

    it("retrieves eslint-recommended when an extension is named eslint:recommended", async () => {
        // Arrange
        const eslintRecommended = { rules: {} };
        const importer = async (extensionName: string) =>
            extensionName === "eslint/conf/eslint-recommended"
                ? eslintRecommended
                : new Error(`Unknown extension name: '${extensionName}`);

        // Act
        const { importedExtensions } = await retrieveExtendsValues(
            { importer },
            "eslint:recommended",
        );

        // Assert
        expect(importedExtensions).toEqual([eslintRecommended]);
    });

    it("reports a failure when an extension fails to import", async () => {
        // Arrange
        const error = new Error("Oh no");
        const importer = async () => error;

        // Act
        const { configurationErrors } = await retrieveExtendsValues({ importer }, "extension-name");

        // Assert
        expect(configurationErrors).toEqual([expect.objectContaining({ error })]);
    });

    it("retrieves an extension when an import succeeds", async () => {
        // Arrange
        const extension = { rules: {} };
        const importer = async () => extension;

        // Act
        const { importedExtensions } = await retrieveExtendsValues({ importer }, "extension-name");

        // Assert
        expect(importedExtensions).toEqual([extension]);
    });

    it("retrieves multiple extensions when multiple are provided", async () => {
        // Arrange
        const extensions = {
            "eslint-plugin-one": {
                rules: {
                    "rule-one": {},
                },
            },
            "eslint-plugin-two": {
                rules: {
                    "rule-two": {},
                },
            },
        } as const;
        const importer = async (extensionName: string) =>
            extensions[extensionName as keyof typeof extensions];

        // Act
        const { importedExtensions } = await retrieveExtendsValues(
            { importer },
            Object.keys(extensions),
        );

        // Assert
        expect(importedExtensions).toEqual(Object.values(extensions));
    });
});
