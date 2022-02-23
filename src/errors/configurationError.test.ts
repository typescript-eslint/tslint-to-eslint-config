import { describe, expect, it } from "@jest/globals";
import { EOL } from "os";

import { ConfigurationError } from "./configurationError";

describe("ConfigurationError", () => {
    describe("getSummary", () => {
        it("creates a summary for the error", () => {
            // Arrange
            const rawError = new Error("Oh no!");
            const complaint = "It broke";
            const error = new ConfigurationError(rawError, complaint);

            // Act
            const summary = error.getSummary();

            // Assert
            expect(summary).toEqual(`It broke: ${rawError.stack}${EOL}`);
        });
    });
});
