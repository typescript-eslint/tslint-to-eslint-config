import { EOL } from "os";

import { createStubLogger, expectEqualWrites } from "../../../adapters/logger.stubs";
import {
    EditorSettingConversionResults,
    reportEditorConfigConversionResults,
} from "./reportEditorConfigConversionResults";

const createStubConversionResults = (overrides: Partial<EditorSettingConversionResults> = {}) => ({
    failed: [],
    successes: [],
    ...overrides,
});

describe("reportEditorConfigConversionResults", () => {
    it("logs a successful conversion when there is one converted editor setting", () => {
        // Arrange
        const conversionResults = createStubConversionResults({
            successes: ["./hooray"],
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
            successes: ["./one", "./two"],
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

    it("logs a failed conversion when there is one failed conversion", () => {
        // Arrange
        const conversionResults = createStubConversionResults({
            failed: [new Error("It broke.")],
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
            failed: [new Error("It broke."), new Error("It really broke.")],
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
