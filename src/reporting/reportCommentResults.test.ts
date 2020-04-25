import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { ResultStatus } from "../types";
import { reportCommentResults } from "./reportCommentResults";

describe("reportCommentResults", () => {
    it("logs a suggestion when no comment globs are provided", () => {
        // Arrange
        const logger = createStubLogger();

        // Act
        reportCommentResults({ logger }, undefined, { data: [], status: ResultStatus.Succeeded });

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `♻ Consider using --comment to replace TSLint comment directives in your source files. ♻`,
        );
    });

    it("logs a complaint when comment conversions failed", () => {
        // Arrange
        const logger = createStubLogger();
        const errors = [new Error()];

        // Act
        reportCommentResults({ logger }, ["src/index.ts"], { errors, status: ResultStatus.Failed });

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            `❌ Failed to fully replace TSLint comment directives in --comment files. ❌`,
            `  Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs a singular success message when comment conversions succeeded on one file", () => {
        // Arrange
        const logger = createStubLogger();

        // Act
        reportCommentResults({ logger }, ["src/*.ts"], {
            data: ["src/index.ts"],
            status: ResultStatus.Succeeded,
        });

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
        reportCommentResults({ logger }, ["src/*.ts"], {
            data: ["src/index.ts", "src/data.ts"],
            status: ResultStatus.Succeeded,
        });

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `♻ 2 files of TSLint comment directives converted to ESLint. ♻ `,
        );
    });
});
