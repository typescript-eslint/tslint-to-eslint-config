import { findTslintConfiguration } from "./findTslintConfiguration";

describe("findTslintConfiguration", () => {
    it("returns stderr as an error when the command fails", async () => {
        // Arrange
        const [stderr, stdout] = ["error", ""];
        const childProcessExec = () => Promise.resolve({ stderr, stdout });

        // Act
        const result = await findTslintConfiguration("tslint.json", childProcessExec);

        // Assert
        expect(result).toEqual(new Error(stderr));
    });

    it("returns a parse error when the command returns invalid JSON", async () => {
        // Arrange
        const [stderr, stdout] = ["", "invalid"];
        const childProcessExec = () => Promise.resolve({ stderr, stdout });

        // Act
        const result = await findTslintConfiguration("tslint.json", childProcessExec);

        // Assert
        expect(result).toEqual(
            new Error(
                "Error parsing TSLint configuration: SyntaxError: Unexpected token i in JSON at position 0",
            ),
        );
    });

    it("returns parsed JSON when the command returns valid JSON", async () => {
        // Arrange
        const rules = { rules: { "rule-a": true } };
        const [stderr, stdout] = ["", JSON.stringify(rules)];
        const childProcessExec = () => Promise.resolve({ stderr, stdout });

        // Act
        const result = await findTslintConfiguration("tslint.json", childProcessExec);

        // Assert
        expect(result).toEqual(rules);
    });
});
