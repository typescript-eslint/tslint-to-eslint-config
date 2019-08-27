import { ConversionError } from "../errors/conversionError";
import { convertRules } from "./convertRules";
import { TSLintRuleOptions } from "./types";

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
        const conversionError = ConversionError.forRuleError(new Error(), tslintRule);
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
        expect(failed).toEqual([ConversionError.forMerger("eslint-rule-a")]);
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
                        notices: [],
                    },
                ],
            ]),
        );
    });

    it("merges and deduplicates rule notices", () => {
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
                    notices: ["notice-1", "notice-2"],
                },
                {
                    ruleName: "eslint-rule-a",
                    notices: ["notice-1"],
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
                        notices: ["notice-1", "notice-2"],
                    },
                ],
            ]),
        );
    });

    it("merges undefined notices", () => {
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
                    notices: undefined,
                },
                {
                    ruleName: "eslint-rule-a",
                    notices: undefined,
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
                        notices: [],
                    },
                ],
            ]),
        );
    });

    it("marks a new plugin when a conversion has a new plugin", () => {
        // Arrange
        const tslintRule: TSLintRuleOptions = {
            ruleArguments: [],
            ruleName: "tslint-rule-a",
            ruleSeverity: "error",
        };
        const conversionResult = {
            plugins: ["extra-plugin"],
            rules: [],
        };
        const converters = new Map([[tslintRule.ruleName, () => conversionResult]]);
        const mergers = new Map();

        // Act
        const { plugins } = convertRules(
            { converters, mergers },
            { [tslintRule.ruleName]: tslintRule },
        );

        // Assert
        expect(plugins).toEqual(new Set(["extra-plugin"]));
    });
});
