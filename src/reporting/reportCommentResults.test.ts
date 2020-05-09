import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { ResultStatus } from "../types";
import { reportCommentResults } from "./reportCommentResults";

describe("reportCommentResults", () => {
    it("logs a suggestion when no comment globs were requested", () => {
        // Arrange
        const logger = createStubLogger();

        // Act
        reportCommentResults({ logger }, { data: undefined, status: ResultStatus.Succeeded });

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `♻ Consider using --comments to replace TSLint comment directives in your source files. ♻`,
        );
    });

    it("logs a singular complaint when one comment conversion fails", () => {
        // Arrange
        const logger = createStubLogger();
        const errors = [new Error("Hello")];

        // Act
        reportCommentResults({ logger }, { errors, status: ResultStatus.Failed });

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            `❌ 1 error converting TSLint comment directives in --comments files. ❌`,
            `  Check ${logger.debugFileName} for details.`,
        );
        expectEqualWrites(
            logger.info.write,
            `1 error converting TSLint comment directives in --comments files:`,
            `  * Hello`,
        );
    });

    it("logs a plural complaint when multiple comment conversions fail", () => {
        // Arrange
        const logger = createStubLogger();
        const errors = [new Error("Hello"), new Error("World")];

        // Act
        reportCommentResults({ logger }, { errors, status: ResultStatus.Failed });

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            `❌ 2 errors converting TSLint comment directives in --comments files. ❌`,
            `  Check ${logger.debugFileName} for details.`,
        );
        expectEqualWrites(
            logger.info.write,
            `2 errors converting TSLint comment directives in --comments files:`,
            `  * Hello`,
            `  * World`,
        );
    });

    it("logs a singular success message when comment conversions succeeded on one file", () => {
        // Arrange
        const logger = createStubLogger();

        // Act
        reportCommentResults(
            { logger },
            {
                data: ["src/index.ts"],
                status: ResultStatus.Succeeded,
            },
        );

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
        reportCommentResults(
            { logger },
            {
                data: ["src/index.ts", "src/data.ts"],
                status: ResultStatus.Succeeded,
            },
        );

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `♻ 2 files of TSLint comment directives converted to ESLint. ♻ `,
        );
    });
});
