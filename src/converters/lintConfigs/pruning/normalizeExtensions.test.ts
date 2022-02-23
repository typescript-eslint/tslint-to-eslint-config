import { describe, expect, it } from "@jest/globals";

import { ESLintConfigurationRuleValue } from "../../../input/findESLintConfiguration";
import { normalizeExtensions } from "./normalizeExtensions";

const createStubExtension = (ruleName: string, ruleValue: ESLintConfigurationRuleValue) => {
    return {
        rules: {
            [ruleName]: ruleValue,
        },
    };
};

describe("removeExtendsDuplicatedRules", () => {
    it("ignores an empty extension", () => {
        // Arrange
        const extensions = [{}];

        // Act
        const results = normalizeExtensions(extensions);

        // Assert
        expect(results).toEqual(new Map());
    });

    it("overrides a rule's first value when a second extension contains it", () => {
        // Arrange
        const ruleName = "rule-a";
        const extensions = [
            createStubExtension(ruleName, "error"),
            createStubExtension(ruleName, "warn"),
        ];

        // Act
        const results = normalizeExtensions(extensions);

        // Assert
        expect(results).toEqual(
            new Map([
                [
                    ruleName,
                    {
                        ruleArguments: [],
                        ruleName,
                        ruleSeverity: "warn",
                    },
                ],
            ]),
        );
    });

    it("normalizes a configuration when an array", () => {
        // Arrange
        const ruleName = "rule-a";
        const ruleArgument = { value: true };
        const extensions = [createStubExtension(ruleName, ["error", ruleArgument])];

        // Act
        const results = normalizeExtensions(extensions);

        // Assert
        expect(results).toEqual(
            new Map([
                [
                    ruleName,
                    {
                        ruleArguments: [ruleArgument],
                        ruleName,
                        ruleSeverity: "error",
                    },
                ],
            ]),
        );
    });
});
