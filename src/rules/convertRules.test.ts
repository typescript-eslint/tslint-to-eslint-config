import { convertRules } from "./convertRules";
import { TSLintRuleOptions } from "./types";
import { ConversionError } from "./conversionError";

describe("convertRules", () => {
    it("doesn't marks a disabled rule as missing when its converter returns undefined", () => {
        // Arrange
        const tslintRule: TSLintRuleOptions = {
            ruleArguments: [],
            ruleName: "tslint-rule-a",
            ruleSeverity: "off",
        };
        const converters = new Map();
        const mergers = new Map();

        // Act
        const { missing } = convertRules(
            { converters, mergers },
            { [tslintRule.ruleName]: tslintRule },
        );

        // Assert
        expect(missing).toEqual([]);
    });

    it("marks an enabled rule as missing when its converter returns undefined", () => {
        // Arrange
        const tslintRule: TSLintRuleOptions = {
            ruleArguments: [],
            ruleName: "tslint-rule-a",
            ruleSeverity: "error",
        };
        const converters = new Map();
        const mergers = new Map();

        // Act
        const { missing } = convertRules(
            { converters, mergers },
            { [tslintRule.ruleName]: tslintRule },
        );

        // Assert
        expect(missing).toEqual([tslintRule]);
    });

    it("marks a conversion as failed when returned a conversion error", () => {
        // Arrange
        const tslintRule: TSLintRuleOptions = {
            ruleArguments: [],
            ruleName: "tslint-rule-a",
            ruleSeverity: "error",
        };
        const conversionError = new ConversionError(new Error(), tslintRule);
        const converters = new Map([[tslintRule.ruleName, () => conversionError]]);
        const mergers = new Map();

        // Act
        const { failed } = convertRules(
            { converters, mergers },
            { [tslintRule.ruleName]: tslintRule },
        );

        // Assert
        expect(failed).toEqual([conversionError]);
    });

    it("marks a converted rule name as converted when a conversion has rules", () => {
        // Arrange
        const tslintRule: TSLintRuleOptions = {
            ruleArguments: [],
            ruleName: "tslint-rule-a",
            ruleSeverity: "error",
        };
        const conversionResult = {
            rules: [
                {
                    ruleName: "eslint-rule-a",
                },
            ],
        };
        const converters = new Map([[tslintRule.ruleName, () => conversionResult]]);
        const mergers = new Map();

        // Act
        const { converted } = convertRules(
            { converters, mergers },
            { [tslintRule.ruleName]: tslintRule },
        );

        // Assert
        expect(converted).toEqual(
            new Map([
                [
                    "eslint-rule-a",
                    {
                        ruleName: "eslint-rule-a",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        );
    });

    it("reports a failure when two outputs exist for a converted rule without a merger", () => {
        // Arrange
        const tslintRule: TSLintRuleOptions = {
            ruleArguments: [],
            ruleName: "tslint-rule-a",
            ruleSeverity: "error",
        };
        const conversionResult = {
            rules: [
                {
                    ruleName: "eslint-rule-a",
                },
                {
                    ruleName: "eslint-rule-a",
                },
            ],
        };
        const converters = new Map([[tslintRule.ruleName, () => conversionResult]]);
        const mergers = new Map();

        // Act
        const { failed } = convertRules(
            { converters, mergers },
            { [tslintRule.ruleName]: tslintRule },
        );

        // Assert
        expect(failed).toEqual(
            jasmine.arrayContaining([
                jasmine.objectContaining({
                    error: jasmine.objectContaining({
                        message: `No merger for multiple output eslint-rule-a rule configurations.`,
                    }),
                    tslintRule,
                }),
            ]),
        );
    });

    it("merges rule arguments two outputs exist for a converted rule with a merger", () => {
        // Arrange
        const tslintRule: TSLintRuleOptions = {
            ruleArguments: [],
            ruleName: "tslint-rule-a",
            ruleSeverity: "error",
        };
        const conversionResult = {
            rules: [
                {
                    ruleName: "eslint-rule-a",
                },
                {
                    ruleName: "eslint-rule-a",
                },
            ],
        };
        const mergedArguments = [{ merged: true }];
        const converters = new Map([[tslintRule.ruleName, () => conversionResult]]);
        const mergers = new Map([[conversionResult.rules[0].ruleName, () => mergedArguments]]);

        // Act
        const { converted } = convertRules(
            { converters, mergers },
            { [tslintRule.ruleName]: tslintRule },
        );

        // Assert
        expect(converted).toEqual(
            new Map([
                [
                    "eslint-rule-a",
                    {
                        ruleArguments: mergedArguments,
                        ruleName: "eslint-rule-a",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        );
    });

    it("marks a new package when a conversion has a new package", () => {
        // Arrange
        const tslintRule: TSLintRuleOptions = {
            ruleArguments: [],
            ruleName: "tslint-rule-a",
            ruleSeverity: "error",
        };
        const conversionResult = {
            packages: ["extra-package"],
            rules: [],
        };
        const converters = new Map([[tslintRule.ruleName, () => conversionResult]]);
        const mergers = new Map();

        // Act
        const { packages } = convertRules(
            { converters, mergers },
            { [tslintRule.ruleName]: tslintRule },
        );

        // Assert
        expect(packages).toEqual(new Set(["extra-package"]));
    });
});
