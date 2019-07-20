import { EOL } from "os";
import { ESLintRuleOptions } from "../rules/types";
import { reportConversionResults } from "./reportConversionResults";
import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { createEmptyConversionResults } from "../conversion/conversionResults.stubs";
import { ConversionError } from "../errors/conversionError";
import { ConfigurationError } from "../errors/configurationError";

describe("reportConversionResults", () => {
    it("logs a successful conversion when there is one converted rule", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map<string, ESLintRuleOptions>([
                [
                    "tslint-rule-one",
                    {
                        notices: ["1", "2"],
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
        expectEqualWrites(
            logger.stdout.write,
            `✨ 1 rule replaced with its ESLint equivalent. ✨${EOL}` +
                `📢 1 ESLint rule behaves differently from their TSLint counterparts: 📢${EOL}` +
                `* tslint-rule-one:${EOL}` +
                `  - 1${EOL}` +
                `  - 2${EOL}`,
        );
    });

    it("logs successful conversions when there are multiple converted rules", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map<string, ESLintRuleOptions>([
                [
                    "tslint-rule-one",
                    {
                        notices: ["1", "2"],
                        ruleArguments: ["a", "b"],
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
                [
                    "tslint-rule-two",
                    {
                        notices: ["3", "4"],
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
            `✨ 2 rules replaced with their ESLint equivalents. ✨${EOL}` +
                `📢 2 ESLint rules behave differently from their TSLint counterparts: 📢${EOL}` +
                `* tslint-rule-one:${EOL}` +
                `  - 1${EOL}` +
                `  - 2${EOL}` +
                `* tslint-rule-two:${EOL}` +
                `  - 3${EOL}` +
                `  - 4${EOL}`,
        );
    });

    it("logs a failed configuration when there is one failed configuration error", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            failed: [new ConfigurationError(new Error("and a one"), "some complaint")],
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "💀 1 error thrown. 💀",
            `Check ${logger.debugFileName} for details.`,
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
            "💀 1 error thrown. 💀",
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
            "💀 2 errors thrown. 💀",
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

    it("logs a missing plugin when there is a missing plugin", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            plugins: new Set(["plugin-one"]),
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "⚡ 1 package is required for new ESLint rules. ⚡",
            "\tplugin-one",
        );
    });

    it("logs missing plugins when there are missing plugins", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            plugins: new Set(["plugin-one", "plugin-two"]),
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "⚡ 2 packages are required for new ESLint rules. ⚡",
            "\tplugin-one",
            "\tplugin-two",
        );
    });
});
