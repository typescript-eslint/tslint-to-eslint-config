import { describe, it } from "@jest/globals";
import { EOL } from "os";

import { createStubLogger, expectEqualWrites } from "../../../adapters/logger.stubs";
import { EditorConfigsConversionResults } from "../types";
import { reportEditorConfigConversionResults } from "./reportEditorConfigConversionResults";

const createStubConversionResults = (overrides: Partial<EditorConfigsConversionResults> = {}) => ({
    failed: new Map(),
    successes: new Map(),
    ...overrides,
});

const stubSuccess = {
    contents: "Hello, world!",
    missing: [],
};

describe("reportEditorConfigConversionResults", () => {
    it("logs a successful conversion when there is one converted editor setting", () => {
        // Arrange
        const conversionResults = createStubConversionResults({
            successes: new Map([["./one", stubSuccess]]),
        });

        const logger = createStubLogger();

        // Act
        reportEditorConfigConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `${EOL}✨ 1 editor file augmented with its ESLint equivalent. ✨${EOL}`,
        );
    });

    it("logs successful conversions when there are multiple converted settings", () => {
        // Arrange
        const conversionResults = createStubConversionResults({
            successes: new Map([
                ["./one", stubSuccess],
                ["./two", stubSuccess],
            ]),
        });

        const logger = createStubLogger();

        // Act
        reportEditorConfigConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `${EOL}✨ 2 editor files augmented with their ESLint equivalents. ✨${EOL}`,
        );
    });

    it("logs missing setting when there a successful conversion includes them", () => {
        // Arrange
        const missing = ["setting"];
        const conversionResults = createStubConversionResults({
            successes: new Map([["./one", { ...stubSuccess, missing }]]),
        });

        const logger = createStubLogger();

        // Act
        reportEditorConfigConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `${EOL}✨ 1 editor file augmented with its ESLint equivalent. ✨`,
            ``,
            `❓ 1 ./one editor setting is not known by tslint-to-eslint-config to have an ESLint equivalent. ❓`,
            `  Check stub-output.log for details.`,
        );
    });

    it("logs a failed conversion when there is one failed conversion", () => {
        // Arrange
        const conversionResults = createStubConversionResults({
            failed: new Map([["./one", new Error("It broke.")]]),
        });

        const logger = createStubLogger();

        // Act
        reportEditorConfigConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            `❌ 1 error thrown. ❌`,
            `  Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs failed conversions when there are multiple failed conversions", () => {
        // Arrange
        const conversionResults = createStubConversionResults({
            failed: new Map([
                ["./one", new Error("It broke.")],
                ["./two", new Error("It really broke.")],
            ]),
        });

        const logger = createStubLogger();

        // Act
        reportEditorConfigConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            `❌ 2 errors thrown. ❌`,
            `  Check ${logger.debugFileName} for details.`,
        );
    });
});
