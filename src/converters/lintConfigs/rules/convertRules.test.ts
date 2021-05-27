import { ConversionError } from "../../../errors/conversionError";
import { convertRules } from "./convertRules";
import { ConversionResult,RuleConverter } from "./ruleConverter";
import { RuleMerger } from "./ruleMerger";
import { TSLintRuleOptions, TSLintRuleSeverity } from "./types";

describe("convertRules", () => {
    it("doesn't crash when passed an undefined configuration", () => {
        // Arrange
        const { converters, mergers } = setupConversionEnvironment({
            ruleSeverity: "off",
        });

        // Act
        const { missing } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            undefined,
            new Map<string, string[]>(),
        );

        // Assert
        expect(missing).toEqual([]);
    });

    it("doesn't marks a disabled rule as missing when its converter returns undefined", () => {
        // Arrange
        const { tslintRule, converters, mergers } = setupConversionEnvironment({
            ruleSeverity: "off",
        });

        // Act
        const { missing } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            { [tslintRule.ruleName]: tslintRule },
            new Map<string, string[]>(),
        );

        // Assert
        expect(missing).toEqual([]);
    });

    it("marks an enabled rule as missing when its converter returns undefined", () => {
        // Arrange
        const { tslintRule, converters, mergers } = setupConversionEnvironment();

        // Act
        const { missing } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            { [tslintRule.ruleName]: tslintRule },
            new Map<string, string[]>(),
        );

        // Assert
        expect(missing).toEqual([tslintRule]);
    });

    it("marks a conversion as failed when returned a conversion error", () => {
        // Arrange
        const { tslintRule, converters, mergers } = setupConversionEnvironment();
        const conversionError = ConversionError.forRuleError(new Error(), tslintRule);
        converters.set(tslintRule.ruleName, () => conversionError);

        // Act
        const { failed } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            { [tslintRule.ruleName]: tslintRule },
            new Map<string, string[]>(),
        );

        // Assert
        expect(failed).toEqual([conversionError]);
    });

    it("marks a converted rule name as converted when a conversion has rules", () => {
        // Arrange
        const conversionResult = {
            rules: [
                {
                    ruleName: "eslint-rule-a",
                },
            ],
        };
        const { tslintRule, converters, mergers } = setupConversionEnvironment({
            conversionResult,
        });
        const ruleEquivalents = new Map<string, string[]>();

        // Act
        const { converted } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            { [tslintRule.ruleName]: tslintRule },
            ruleEquivalents,
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
        expect(ruleEquivalents).toEqual(new Map([["tslint-rule-a", ["eslint-rule-a"]]]));
    });

    it("reports a failure when two outputs exist for a converted rule without a merger", () => {
        // Arrange
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
        const { tslintRule, converters, mergers } = setupConversionEnvironment({
            conversionResult,
        });

        // Act
        const { failed } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            { [tslintRule.ruleName]: tslintRule },
            new Map<string, string[]>(),
        );

        // Assert
        expect(failed).toEqual([ConversionError.forMerger("eslint-rule-a")]);
    });

    it("merges rule arguments when two outputs exist for a converted rule with a merger", () => {
        // Arrange
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
        const { tslintRule, converters, mergers } = setupConversionEnvironment({
            conversionResult,
            ruleToMerge: conversionResult.rules[0].ruleName,
        });

        // Act
        const { converted } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            { [tslintRule.ruleName]: tslintRule },
            new Map<string, string[]>(),
        );

        // Assert
        expect(converted).toEqual(
            new Map([
                [
                    "eslint-rule-a",
                    {
                        ruleArguments: [{ merged: true }],
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
        const { tslintRule, converters, mergers } = setupConversionEnvironment({
            conversionResult,
            ruleToMerge: conversionResult.rules[0].ruleName,
        });

        // Act
        const { converted } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            { [tslintRule.ruleName]: tslintRule },
            new Map<string, string[]>(),
        );

        // Assert
        expect(converted).toEqual(
            new Map([
                [
                    "eslint-rule-a",
                    {
                        ruleArguments: [{ merged: true }],
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
        const { tslintRule, converters, mergers } = setupConversionEnvironment({
            conversionResult,
            ruleToMerge: conversionResult.rules[0].ruleName,
        });

        // Act
        const { converted } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            { [tslintRule.ruleName]: tslintRule },
            new Map<string, string[]>(),
        );

        // Assert
        expect(converted).toEqual(
            new Map([
                [
                    "eslint-rule-a",
                    {
                        ruleArguments: [{ merged: true }],
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
        const conversionResult = {
            plugins: ["extra-plugin"],
            rules: [],
        };
        const { tslintRule, converters, mergers } = setupConversionEnvironment({
            conversionResult,
        });

        // Act
        const { plugins } = convertRules(
            { ruleConverters: converters, ruleMergers: mergers },
            { [tslintRule.ruleName]: tslintRule },
            new Map<string, string[]>(),
        );

        // Assert
        expect(plugins).toEqual(new Set(["extra-plugin"]));
    });
});

function setupConversionEnvironment(
    config: {
        ruleSeverity?: TSLintRuleSeverity;
        conversionResult?: ConversionResult;
        ruleToMerge?: string;
    } = {},
) {
    const { ruleSeverity, conversionResult, ruleToMerge } = config;

    const tslintRule = createSampleTsLintRule(ruleSeverity);
    const converters = createConverters(tslintRule, conversionResult);
    const mergers = createMergers(ruleToMerge);

    return { tslintRule, converters, mergers };
}

function createSampleTsLintRule(ruleSeverity: TSLintRuleSeverity = "error"): TSLintRuleOptions {
    return {
        ruleArguments: [],
        ruleName: "tslint-rule-a",
        ruleSeverity,
    };
}

function createConverters(
    tslintRule: TSLintRuleOptions,
    conversionResult?: ConversionResult,
): Map<string, RuleConverter> {
    const converters = new Map<string, RuleConverter>();

    if (conversionResult !== undefined) {
        converters.set(tslintRule.ruleName, () => conversionResult);
    }

    return converters;
}

function createMergers(ruleToMerge?: string): Map<string, RuleMerger> {
    const mergers = new Map<string, RuleMerger>();

    if (ruleToMerge !== undefined) {
        mergers.set(ruleToMerge, () => [{ merged: true }]);
    }

    return mergers;
}
