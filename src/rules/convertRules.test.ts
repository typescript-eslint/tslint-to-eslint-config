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

        // Act
        const { missing } = convertRules([tslintRule], converters);

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

        // Act
        const { missing } = convertRules([tslintRule], converters);

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

        // Act
        const { failed } = convertRules([tslintRule], converters);

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

        // Act
        const { converted } = convertRules([tslintRule], converters);

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

        // Act
        const { packages } = convertRules([tslintRule], converters);

        // Assert
        expect(packages).toEqual(new Set(["extra-package"]));
    });
});
