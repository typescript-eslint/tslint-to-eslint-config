import {
    ESLintConfiguration,
    ESLintConfigurationRuleValue,
} from "../../input/findESLintConfiguration";
import { ESLintRuleOptions } from "../../rules/types";
import { removeExtendsDuplicatedRules } from "./removeExtendsDuplicatedRules";

const prepareTestRule = (
    ruleOptions: Partial<ESLintRuleOptions>,
    extensionConfiguration: ESLintConfigurationRuleValue = 2,
) => {
    const ruleName = "rule-a";
    const allRules = new Map<string, ESLintRuleOptions>([
        [
            ruleName,
            {
                ruleArguments: [],
                ruleName,
                ruleSeverity: "off",
                ...ruleOptions,
            },
        ],
    ]);
    const extensions: Partial<ESLintConfiguration>[] = [
        {
            rules: {
                [ruleName]: extensionConfiguration,
            },
        },
    ];

    return { ruleName, allRules, extensions };
};

describe("removeExtendsDuplicatedRules", () => {
    it("keeps a rule when there are no rules in the extension", () => {
        // Arrange
        const { allRules } = prepareTestRule(
            {
                ruleName: "mismatched",
            },
            2,
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, [{}]);

        // Assert
        expect(differentRules.size).toBe(1);
    });

    it("keeps a rule when it doesn't match any existing rule", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleName: "mismatched",
            },
            2,
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(1);
    });

    it("removes a rule when it matches an existing rule as numbers", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleSeverity: "warn",
            },
            1,
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(0);
    });

    it("keeps a rule when it conflicts with an existing rule as numbers", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleSeverity: "warn",
            },
            2,
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(1);
    });

    it("removes a rule when it matches an existing rule as strings", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleSeverity: "warn",
            },
            "warn",
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(0);
    });

    it("keeps a rule when it conflicts with an existing rule as strings", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleSeverity: "warn",
            },
            "error",
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(1);
    });

    it("removes a rule when it matches an existing rule as objects", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleArguments: ["some-argument"],
                ruleSeverity: "warn",
            },
            ["warn", "some-argument"],
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(0);
    });

    it("keeps a rule when it conflicts with an existing rule as objects", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleArguments: ["some-argument-one"],
                ruleSeverity: "warn",
            },
            ["warn", "some-argument-modified"],
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(1);
    });
});
