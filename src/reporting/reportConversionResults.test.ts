import { EOL } from "os";

import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { createEmptyConversionResults } from "../conversion/conversionResults.stubs";
import { ESLintRuleOptions } from "../rules/types";
import { reportConversionResults } from "./reportConversionResults";

describe("reportConversionResults", () => {
    it("logs a successful conversion without notices when there is one converted rule without notices", () => {
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
        expectEqualWrites(
            logger.stdout.write,
            `✨ 1 rule replaced with its ESLint equivalent. ✨${EOL}`,
        );
    });

    it("logs a successful conversion with notices when there is one converted rule with notices", () => {
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
            `✨ 1 rule replaced with its ESLint equivalent. ✨${EOL}`,
            `❗ 1 ESLint rule behaves differently from its TSLint counterpart ❗`,
            `  * tslint-rule-one:`,
            `    - 1`,
            `    - 2`,
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
            `✨ 2 rules replaced with their ESLint equivalents. ✨${EOL}`,
            `❗ 2 ESLint rules behave differently from their TSLint counterparts ❗`,
            `  * tslint-rule-one:`,
            `    - 1`,
            `    - 2`,
            `  * tslint-rule-two:`,
            `    - 3`,
            `    - 4`,
        );
    });

    it("logs a failed conversion when there is one failed conversion", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            failed: [{ getSummary: () => "It broke." }],
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "❌ 1 error thrown. ❌",
            `  Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs failed conversions when there are multiple failed conversions", () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            failed: [{ getSummary: () => "It broke." }, { getSummary: () => "It really broke." }],
        });

        const logger = createStubLogger();

        // Act
        reportConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "❌ 2 errors thrown. ❌",
            `  Check ${logger.debugFileName} for details.`,
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
            "❓ 1 rule does not yet have an ESLint equivalent ❓",
            `  See generated log file; defaulting to eslint-plugin-tslint for it.`,
        );
        expectEqualWrites(
            logger.info.write,
            'tslint-to-eslint-config does not know the ESLint equivalent for TSLint\'s "tslint-rule-one"',
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
            "❓ 2 rules do not yet have ESLint equivalents ❓",
            `  See generated log file; defaulting to eslint-plugin-tslint for these rules.`,
        );
        expectEqualWrites(
            logger.info.write,
            'tslint-to-eslint-config does not know the ESLint equivalent for TSLint\'s "tslint-rule-one"',
            'tslint-to-eslint-config does not know the ESLint equivalent for TSLint\'s "tslint-rule-two"',
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
            "  plugin-one",
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
            "  plugin-one",
            "  plugin-two",
        );
    });
});
