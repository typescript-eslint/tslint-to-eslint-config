import { describe, expect, it } from "@jest/globals";

import { createStubExec, createStubThrowingExec } from "../adapters/exec.stubs";
import { findReportedConfiguration } from "./findReportedConfiguration";

describe("findReportedConfiguration", () => {
    it("returns stderr as an error when the command fails with a zero exit code", async () => {
        // Arrange
        const stderr = "error";
        const exec = createStubExec({ stderr });

        // Act
        const result = await findReportedConfiguration(exec, "command", "sample.json");

        // Assert
        expect(result).toEqual(new Error(stderr));
    });

    it("returns stderr as an error when the command fails with a non-zero exit code", async () => {
        // Arrange
        const stderr = "error";
        const exec = createStubThrowingExec({ stderr });

        // Act
        const result = await findReportedConfiguration(exec, "command", "sample.json");

        // Assert
        expect(result).toEqual(new Error(stderr));
    });

    it("returns a parse error when the command returns invalid JSON", async () => {
        // Arrange
        const stdout = "invalid";
        const exec = createStubExec({ stdout });

        // Act
        const result = await findReportedConfiguration(exec, "command", "sample.json");

        // Assert
        expect(result).toEqual(
            new Error(
                "Error parsing configuration: SyntaxError: Unexpected token i in JSON at position 0",
            ),
        );
    });

    it("returns parsed JSON when the command returns valid JSON", async () => {
        // Arrange
        const rules = { "rule-a": true };
        const stdout = JSON.stringify({ rules });
        const exec = createStubExec({ stdout });

        // Act
        const result = await findReportedConfiguration(exec, "command", "sample.json");

        // Assert
        expect(result).toEqual({
            rules,
        });
    });
});
