import { findTslintConfiguration } from "./findTslintConfiguration";

describe("findTslintConfiguration", () => {
    it("returns stderr as an error when the command fails", async () => {
        // Arrange
        const [stderr, stdout] = ["error", ""];
        const exec = () => Promise.resolve({ stderr, stdout });

        // Act
        const result = await findTslintConfiguration({ exec }, "tslint.json");

        // Assert
        expect(result).toEqual(new Error(stderr));
    });

    it("returns a parse error when the command returns invalid JSON", async () => {
        // Arrange
        const [stderr, stdout] = ["", "invalid"];
        const exec = () => Promise.resolve({ stderr, stdout });

        // Act
        const result = await findTslintConfiguration({ exec }, "tslint.json");

        // Assert
        expect(result).toEqual(
            new Error(
                "Error parsing TSLint configuration: SyntaxError: Unexpected token i in JSON at position 0",
            ),
        );
    });

    it("returns parsed JSON when the command returns valid JSON", async () => {
        // Arrange
        const rules = { "rule-a": true };
        const [stderr, stdout] = ["", JSON.stringify({ rules })];
        const exec = () => Promise.resolve({ stderr, stdout });

        // Act
        const result = await findTslintConfiguration({ exec }, "tslint.json");

        // Assert
        expect(result).toEqual({
            ruleDirectories: [],
            rules,
        });
    });

    it("fills in configuration defaults the command returns valid but empty JSON", async () => {
        // Arrange
        const originalConfiguration = {};
        const [stderr, stdout] = ["", JSON.stringify(originalConfiguration)];
        const exec = () => Promise.resolve({ stderr, stdout });

        // Act
        const result = await findTslintConfiguration({ exec }, "tslint.json");

        // Assert
        expect(result).toEqual({
            ruleDirectories: [],
            rules: {},
        });
    });
});
