import { describe, expect, it } from "@jest/globals";
import { EOL } from "os";

import { TSLintRuleOptions } from "../converters/lintConfigs/rules/types.js";
import { ConversionError } from "./conversionError.js";

describe("ConversionError", () => {
    describe("getSummary", () => {
        it("prints the error stack when created for an error", () => {
            // Arrange
            const error = new Error("Oh no!");
            const tslintRule: TSLintRuleOptions = {
                ruleArguments: [],
                ruleName: "rule-a",
                ruleSeverity: "warning",
            };
            const conversionError = ConversionError.forRuleError(error, tslintRule);

            // Act
            const summary = conversionError.getSummary();

            // Assert
            expect(summary).toEqual(
                `rule-a threw an error during conversion: ${error.stack}${EOL}`,
            );
        });

        it("prints a merger complaint when created for a merger", () => {
            // Arrange
            const conversionError = ConversionError.forMerger("eslint-rule");

            // Act
            const summary = conversionError.getSummary();

            // Assert
            expect(summary).toEqual(
                `Error: multiple output eslint-rule ESLint rule options were generated, but tslint-to-eslint-config doesn't have "merger" logic to deal with this.${EOL}Please file an issue at https://github.com/typescript-eslint/tslint-to-eslint-config/issues/new?template=missing_merger.md. Thanks!`,
            );
        });
    });
});
