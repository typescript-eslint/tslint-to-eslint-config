import { describe, it } from "@jest/globals";

import { createStubLogger, expectEqualWrites } from "../../../adapters/logger.stubs";
import { reportCommentResults } from "./reportCommentResults";

describe("reportCommentResults", () => {
    it("logs a suggestion when no comment globs were requested", () => {
        // Arrange
        const logger = createStubLogger();

        // Act
        reportCommentResults({ logger });

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `♻ Consider using --comments to replace TSLint comment directives in your source files. ♻`,
        );
    });

    it("logs a singular success message when comment conversions succeeded on one file", () => {
        // Arrange
        const logger = createStubLogger();

        // Act
        reportCommentResults({ logger }, ["src/index.ts"]);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `♻ 1 file of TSLint comment directives converted to ESLint. ♻ `,
        );
    });

    it("logs a plural success message when comment conversions succeeded on two files", () => {
        // Arrange
        const logger = createStubLogger();

        // Act
        reportCommentResults({ logger }, ["src/index.ts", "src/data.ts"]);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `♻ 2 files of TSLint comment directives converted to ESLint. ♻ `,
        );
    });
});
