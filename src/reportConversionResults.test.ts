import { createStubLogger, emptyConversionResults, expectEqualWrites, stubOutChalk } from "./stubs";
stubOutChalk();

import { reportConversionResults } from "./reportConversionResults";
import { ConfigConversionResults } from "./rules/convertRules";
import { ESLintRuleOptions } from "./rules/types";
import { ConversionError } from "./rules/conversionError";

describe("reportConversionResults", () => {
    it("logs a successful conversion when there is one converted rule", () => {
        // Arrange
        const conversionResults: ConfigConversionResults = {
            ...emptyConversionResults,
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
        };

        const logger = createStubLogger();

        // Act
        reportConversionResults(conversionResults, logger);

        // Assert
        expectEqualWrites(logger.stdout.write, "✨ 1 rule replaced with its ESLint equivalent. ✨");
    });

    it("logs successful conversions when there are multiple converted rules", () => {
        // Arrange
        const conversionResults = {
            ...emptyConversionResults,
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
        };

        const logger = createStubLogger();

        // Act
        reportConversionResults(conversionResults, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "✨ 2 rules replaced with their ESLint equivalents. ✨",
        );
    });

    it("logs a failed conversion when there is one failed conversion", () => {
        // Arrange
        const conversionResults: ConfigConversionResults = {
            ...emptyConversionResults,
            failed: [
                new ConversionError(new Error("and a one"), {
                    ruleArguments: ["a", "b"],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                }),
            ],
        };

        const logger = createStubLogger();

        // Act
        reportConversionResults(conversionResults, logger);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "💀 1 rule threw an error; using eslint-plugin-tslint instead. 💀",
            `Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs failed conversions when there are multiple failed conversions", () => {
        // Arrange
        const conversionResults: ConfigConversionResults = {
            ...emptyConversionResults,
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
        };

        const logger = createStubLogger();

        // Act
        reportConversionResults(conversionResults, logger);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "💀 2 rules threw errors; using eslint-plugin-tslint instead. 💀",
            `Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs a missing rule when there is a missing rule", () => {
        // Arrange
        const conversionResults: ConfigConversionResults = {
            ...emptyConversionResults,
            missing: [
                {
                    ruleArguments: ["a", "b"],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                },
            ],
        };

        const logger = createStubLogger();

        // Act
        reportConversionResults(conversionResults, logger);

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
        const conversionResults: ConfigConversionResults = {
            ...emptyConversionResults,
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
        };

        const logger = createStubLogger();

        // Act
        reportConversionResults(conversionResults, logger);

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
        const conversionResults: ConfigConversionResults = {
            ...emptyConversionResults,
            packages: new Set(["package-one"]),
        };

        const logger = createStubLogger();

        // Act
        reportConversionResults(conversionResults, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "⚡ 1 package is required for new ESLint rules. ⚡",
            "\tpackage-one",
        );
    });

    it("logs missing packages when there are missing packages", () => {
        // Arrange
        const conversionResults: ConfigConversionResults = {
            ...emptyConversionResults,
            packages: new Set(["package-one", "package-two"]),
        };

        const logger = createStubLogger();

        // Act
        reportConversionResults(conversionResults, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "⚡ 2 packages are required for new ESLint rules. ⚡",
            "\tpackage-one",
            "\tpackage-two",
        );
    });
});
