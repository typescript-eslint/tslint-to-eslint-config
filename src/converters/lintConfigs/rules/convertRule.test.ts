import { ConversionError } from "../../../errors/conversionError";
import { convertRule } from "./convertRule";
import { RuleConverter } from "./ruleConverter";
import { TSLintRuleOptions } from "./types";

describe("convertRule", () => {
    it("returns undefined when no converter exists for a rule", () => {
        // Arrange
        const converters = new Map();

        // Act
        const result = convertRule(
            {
                ruleArguments: [],
                ruleName: "tslint-rule",
                ruleSeverity: "error",
            },
            converters,
        );

        // Assert
        expect(result).toEqual(undefined);
    });

    it("returns converter results when the converter does not throw an error", () => {
        // Arrange
        const converted = {
            rules: [
                {
                    ruleName: "eslint-rule",
                },
            ],
        };
        const converters = new Map<string, RuleConverter>([["tslint-rule", () => converted]]);

        // Act
        const result = convertRule(
            {
                ruleArguments: [],
                ruleName: "tslint-rule",
                ruleSeverity: "error",
            },
            converters,
        );

        // Assert
        expect(result).toEqual(converted);
    });

    it("returns a conversion error when the converter throws an error", () => {
        // Arrange
        const error = new Error("oh no");
        const converters = new Map<string, RuleConverter>([
            [
                "tslint-rule",
                () => {
                    throw error;
                },
            ],
        ]);
        const tslintRule: TSLintRuleOptions = {
            ruleArguments: [],
            ruleName: "tslint-rule",
            ruleSeverity: "error",
        };

        // Act
        const result = convertRule(tslintRule, converters);

        // Assert
        expect(result).toEqual(ConversionError.forRuleError(error, tslintRule));
    });
});
