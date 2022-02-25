import { describe, expect, it } from "@jest/globals";
import { EOL } from "os";

import { formatOutput } from "./formatOutput.js";
import { faqs } from "./formatters/faqs.js";

describe("formatOutput", () => {
    it("formats output as JavaScript for a .js file path", () => {
        // Arrange
        const outputPath = ".eslintrc.js";
        const configuration = { rules: {} };

        // Act
        const output = formatOutput(outputPath, configuration);

        // Assert
        expect(output).toBe(
            `${faqs}module.exports = ${JSON.stringify(configuration, undefined, 4)};${EOL}`,
        );
    });

    it("formats output as JSON for a .json file path", () => {
        // Arrange
        const outputPath = ".eslintrc.json";
        const configuration = { rules: {} };

        // Act
        const output = formatOutput(outputPath, configuration);

        // Assert
        expect(output).toBe(`${faqs}${JSON.stringify(configuration, undefined, 4)}${EOL}`);
    });

    it("formats output as JSON for an unknown dot file path", () => {
        // Arrange
        const outputPath = ".eslintrc";
        const configuration = { rules: {} };

        // Act
        const output = formatOutput(outputPath, configuration);

        // Assert
        expect(output).toBe(`${faqs}${JSON.stringify(configuration, undefined, 4)}${EOL}`);
    });

    it("formats output as JSON for an unknown raw file path", () => {
        // Arrange
        const outputPath = "eslintrc";
        const configuration = { rules: {} };

        // Act
        const output = formatOutput(outputPath, configuration);

        // Assert
        expect(output).toBe(`${faqs}${JSON.stringify(configuration, undefined, 4)}${EOL}`);
    });
});
