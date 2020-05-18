import { ESLintConfigurationRules } from "../../input/findESLintConfiguration";
import { normalizeESLintRules } from "./normalizeESLintRules";

const ruleName = "rule-a";

describe("normalizeESLintRules", () => {
    it("returns an empty map when there are no user rules", () => {
        // Arrange
        const userRules = undefined;

        // Act
        const result = normalizeESLintRules(userRules);

        // Assert
        expect(result).toEqual(new Map());
    });

    it("converts a rule when given as a severity level", () => {
        // Arrange
        const userRules: ESLintConfigurationRules = {
            [ruleName]: "error",
        };

        // Act
        const result = normalizeESLintRules(userRules);

        // Assert
        expect(result).toEqual(
            new Map([
                [
                    ruleName,
                    {
                        ruleArguments: [{}],
                        ruleName: "rule-a",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        );
    });

    it("converts a rule when given as an array", () => {
        // Arrange
        const userRules: ESLintConfigurationRules = {
            [ruleName]: ["error", {}],
        };

        // Act
        const result = normalizeESLintRules(userRules);

        // Assert
        expect(result).toEqual(
            new Map([
                [
                    ruleName,
                    {
                        ruleArguments: [{}],
                        ruleName: "rule-a",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        );
    });

    it("converts a rule when given as an array with multiple arguments", () => {
        // Arrange
        const userRules: ESLintConfigurationRules = {
            [ruleName]: ["error", 4, { value: true }],
        };

        // Act
        const result = normalizeESLintRules(userRules);

        // Assert
        expect(result).toEqual(
            new Map([
                [
                    ruleName,
                    {
                        ruleArguments: [4, { value: true }],
                        ruleName: "rule-a",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        );
    });
});
