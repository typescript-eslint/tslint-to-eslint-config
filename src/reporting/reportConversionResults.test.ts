import { ConversionError } from "../rules/conversionError";
import { ESLintRuleOptions } from "../rules/types";
import { reportConversionResults } from "./reportConversionResults";
import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { createEmptyConversionResults } from "../conversion/conversionResults.stubs";

describe("reportConversionResults", () => {
    it("logs a successful conversion when there is one converted rule", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map<string, ESLintRuleOptions>([
                [
                    "tslint-rule-one",
                    {
                        ruleArguments: ["a", "b"],
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(logger.stdout.write, "✨ 1 rule replaced with its ESLint equivalent. ✨");
    });

    it("logs successful conversions when there are multiple converted rules", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map<string, ESLintRuleOptions>([
                [
                    "tslint-rule-one",
                    {
                        ruleArguments: ["a", "b"],
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
                [
                    "tslint-rule-two",
                    {
                        ruleArguments: ["c", "d"],
                        ruleName: "tslint-rule-two",
                        ruleSeverity: "warn",
                    },
                ],
            ]),
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "✨ 2 rules replaced with their ESLint equivalents. ✨",
        );
    });

    it("logs a failed conversion when there is one failed conversion", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            failed: [
                new ConversionError(new Error("and a one"), {
                    ruleArguments: ["a", "b"],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                }),
            ],
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "💀 1 rule threw an error; using eslint-plugin-tslint instead. 💀",
            `Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs failed conversions when there are multiple failed conversions", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            failed: [
                new ConversionError(new Error("and a one"), {
                    ruleArguments: ["a", "b"],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                }),
                new ConversionError(new Error("and a two"), {
                    ruleArguments: ["c", "d"],
                    ruleName: "tslint-rule-two",
                    ruleSeverity: "warning",
                }),
            ],
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "💀 2 rules threw errors; using eslint-plugin-tslint instead. 💀",
            `Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs a missing rule when there is a missing rule", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            missing: [
                {
                    ruleArguments: ["a", "b"],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                },
            ],
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "👀 1 rule does not yet have an ESLint equivalent; defaulting to eslint-plugin-tslint. 👀",
        );
        expectEqualWrites(
            logger.info.write,
            "tslint-rule-one does not yet have an ESLint equivalent.",
        );
    });

    it("logs missing rules when there are missing rules", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            missing: [
                {
                    ruleArguments: ["a", "b"],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                },
                {
                    ruleArguments: ["c", "d"],
                    ruleName: "tslint-rule-two",
                    ruleSeverity: "warning",
                },
            ],
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "👀 2 rules do not yet have ESLint equivalents; defaulting to eslint-plugin-tslint. 👀",
        );
        expectEqualWrites(
            logger.info.write,
            "tslint-rule-one does not yet have an ESLint equivalent.",
            "tslint-rule-two does not yet have an ESLint equivalent.",
        );
    });

    it("logs a missing package when there is a missing package", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            packages: new Set(["package-one"]),
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "⚡ 1 package is required for new ESLint rules. ⚡",
            "\tpackage-one",
        );
    });

    it("logs missing packages when there are missing packages", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            packages: new Set(["package-one", "package-two"]),
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "⚡ 2 packages are required for new ESLint rules. ⚡",
            "\tpackage-one",
            "\tpackage-two",
        );
    });
});
