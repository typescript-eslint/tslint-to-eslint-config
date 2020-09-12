import { formatMissingRules } from "./formatMissingRules";
import { TSLintRuleOptions } from "./rules/types";

describe("formatMissingRules", () => {
    it("prints a rule's arguments as true when it has none", () => {
        // Arrange
        const missing: TSLintRuleOptions[] = [
            {
                ruleArguments: [],
                ruleName: "tslint-rule-a",
                ruleSeverity: "warning",
            },
        ];

        // Act
        const output = formatMissingRules(missing);

        // Assert
        expect(output).toEqual([
            "error",
            {
                rules: {
                    "tslint-rule-a": true,
                },
            },
        ]);
    });

    it("prints a rule's arguments as an array when it has some", () => {
        // Arrange
        const missing: TSLintRuleOptions[] = [
            {
                ruleArguments: ["b", "c"],
                ruleName: "tslint-rule-a",
                ruleSeverity: "warning",
            },
        ];

        // Act
        const output = formatMissingRules(missing, []);

        // Assert
        expect(output).toEqual([
            "error",
            {
                rules: {
                    "tslint-rule-a": [true, "b", "c"],
                },
            },
        ]);
    });

    it("prints rules sorted by name when there are multiple rules", () => {
        // Arrange
        const missing: TSLintRuleOptions[] = [
            {
                ruleArguments: [],
                ruleName: "tslint-rule-b",
                ruleSeverity: "error",
            },
            {
                ruleArguments: [],
                ruleName: "tslint-rule-a",
                ruleSeverity: "warning",
            },
        ];

        // Act
        const output = formatMissingRules(missing, []);

        // Assert
        expect(output).toEqual([
            "error",
            {
                rules: {
                    "tslint-rule-a": true,
                    "tslint-rule-b": true,
                },
            },
        ]);
    });

    it("skips a rule when its rule severity is off", () => {
        // Arrange
        const missing: TSLintRuleOptions[] = [
            {
                ruleArguments: [],
                ruleName: "tslint-rule-b",
                ruleSeverity: "off",
            },
            {
                ruleArguments: [],
                ruleName: "tslint-rule-a",
                ruleSeverity: "warning",
            },
        ];

        // Act
        const output = formatMissingRules(missing, []);

        // Assert
        expect(output).toEqual([
            "error",
            {
                rules: {
                    "tslint-rule-a": true,
                },
            },
        ]);
    });

    it("includes rule directories when there are rule directories", () => {
        // Arrange
        const rulesDirectory = ["./path/to/rules"];
        const missing: TSLintRuleOptions[] = [
            {
                ruleArguments: [],
                ruleName: "tslint-rule-a",
                ruleSeverity: "warning",
            },
        ];

        // Act
        const output = formatMissingRules(missing, rulesDirectory);

        // Assert
        expect(output).toEqual([
            "error",
            {
                rulesDirectory,
                rules: {
                    "tslint-rule-a": true,
                },
            },
        ]);
    });
});
