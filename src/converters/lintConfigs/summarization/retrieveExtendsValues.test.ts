import { retrieveExtendsValues } from "./retrieveExtendsValues";

describe("retrieveExtendsValues", () => {
    it("retrieves an equivalent ESLint configuration when a retrieved extensions is an ESLint builtin", async () => {
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

    it("retrieves an equivalent typescript-eslint configuration when a retrieved extensions is a typescript-eslint builtin", async () => {
        // Arrange
        const eslintAll = { rules: {} };
        const importer = async (extensionName: string) =>
            extensionName === "node_modules/@typescript-eslint/eslint-plugin/dist/configs/all.json"
                ? eslintAll
                : new Error(`Unknown extension name: '${extensionName}`);

        // Act
        const { importedExtensions } = await retrieveExtendsValues(
            { importer },
            "plugin:@typescript-eslint/all",
        );

        // Assert
        expect(importedExtensions).toEqual([eslintAll]);
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
