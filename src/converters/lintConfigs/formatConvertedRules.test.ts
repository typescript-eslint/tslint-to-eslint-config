import { createEmptyConfigConversionResults } from "./configConversionResults.stubs";
import { formatConvertedRules } from "./formatConvertedRules";

const originalConfiguration = {
    rulesDirectory: [],
    rules: {},
};

describe("formatConvertedRules", () => {
    it("prints rules sorted by name when there are multiple rules", () => {
        // Arrange
        const results = createEmptyConfigConversionResults({
            converted: new Map([
                [
                    "tslint-rule-b",
                    {
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
                [
                    "tslint-rule-a",
                    {
                        ruleName: "tslint-rule-two",
                        ruleSeverity: "warn",
                    },
                ],
            ]),
        });

        // Act
        const output = formatConvertedRules(results, originalConfiguration);

        // Assert
        expect(output).toEqual({
            "tslint-rule-a": "warn",
            "tslint-rule-b": "error",
        });
    });

    it("prints a rule with only its severity when there are no rule arguments", () => {
        // Arrange
        const results = createEmptyConfigConversionResults({
            converted: new Map([
                [
                    "tslint-rule-a",
                    {
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        });

        // Act
        const output = formatConvertedRules(results, originalConfiguration);

        // Assert
        expect(output).toEqual({
            "tslint-rule-a": "error",
        });
    });

    it("prints a rule with only its severity when rule arguments are empty", () => {
        // Arrange
        const results = createEmptyConfigConversionResults({
            converted: new Map([
                [
                    "tslint-rule-a",
                    {
                        ruleArguments: [],
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        });

        // Act
        const output = formatConvertedRules(results, originalConfiguration);

        // Assert
        expect(output).toEqual({
            "tslint-rule-a": "error",
        });
    });

    it("prints a rule with its argumeents and severity when it has arguments", () => {
        // Arrange
        const results = createEmptyConfigConversionResults({
            converted: new Map([
                [
                    "tslint-rule-a",
                    {
                        ruleArguments: ["b", "c"],
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
            ]),
        });

        // Act
        const output = formatConvertedRules(results, originalConfiguration);

        // Assert
        expect(output).toEqual({
            "tslint-rule-a": ["error", "b", "c"],
        });
    });

    it("includes missing rules under the tslint adapter when there are missing rules", () => {
        // Arrange
        const results = createEmptyConfigConversionResults({
            converted: new Map([
                [
                    "tslint-rule-a",
                    {
                        ruleArguments: ["b", "c"],
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
            ]),
            missing: [
                {
                    ruleArguments: ["y", "z"],
                    ruleName: "tslint-rule-x",
                    ruleSeverity: "error",
                },
            ],
        });

        // Act
        const output = formatConvertedRules(results, originalConfiguration);

        // Assert
        expect(output).toEqual({
            "tslint-rule-a": ["error", "b", "c"],
            "@typescript-eslint/tslint/config": [
                "error",
                {
                    rules: {
                        "tslint-rule-x": [true, "y", "z"],
                    },
                },
            ],
        });
    });
});
