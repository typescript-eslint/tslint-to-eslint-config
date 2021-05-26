import { ConversionError } from "../../../errors/conversionError";
import { convertRules } from "./convertRules";
import { RuleMerger } from "./ruleMerger";
import { RuleConverter, ConversionResult } from "./ruleConverter";
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

    test.each([[undefined], [[5, "allow-something", { max: 50 }]]])(
        "runs without an argument merger when both rules have the same arguments",
        (ruleArguments) => {
            // Arrange
            const conversionResult = {
                rules: [
                    {
                        ruleArguments,
                        ruleName: "eslint-rule-a",
                    },
                    {
                        ruleArguments,
                        ruleName: "eslint-rule-a",
                    },
                ],
            };
            const { tslintRule, converters, mergers } = setupConversionEnvironment({
                conversionResult,
            });

            // Act
            const { converted, failed } = convertRules(
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
                            ruleArguments,
                            ruleName: "eslint-rule-a",
                            ruleSeverity: "error",
                            notices: [],
                        },
                    ],
                ]),
            );
            expect(failed).toEqual([]);
        },
    );

    test.each([
        [[[0]], [[1]]],
        [[[""]], [["allow-something"]]],
        [[[{ max: 0 }]], [[{ max: 50 }]]],
        [[[0, "", { max: 0 }]], [[5, "allow-something", { max: 50 }]]],
    ])(
        "reports a failure when two outputs with different arguments exist for a converted rule without a merger",
        ([existingArguments, newArguments]) => {
            // Arrange
            const conversionResult = {
                rules: [
                    {
                        ruleArguments: existingArguments,
                        ruleName: "eslint-rule-a",
                    },
                    {
                        ruleArguments: newArguments,
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
        },
    );

    it("merges rule arguments when two outputs with different arguments exist for a converted rule with a merger", () => {
        // Arrange
        const conversionResult = {
            rules: [
                {
                    ruleArguments: [0],
                    ruleName: "eslint-rule-a",
                },
                {
                    ruleArguments: [1],
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
        expect([
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
            new Map([
                [
                    "eslint-rule-a",
                    {
                        ruleName: "eslint-rule-a",
                        ruleSeverity: "error",
                        notices: ["notice-1", "notice-2"],
                    },
                ],
            ]),
        ]).toContainEqual(converted);
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
        expect([
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
            new Map([
                [
                    "eslint-rule-a",
                    {
                        ruleName: "eslint-rule-a",
                        ruleSeverity: "error",
                        notices: [],
                    },
                ],
            ]),
        ]).toContainEqual(converted);
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
