import { describe, expect, it } from "@jest/globals";

import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations";
import { createEmptyConfigConversionResults } from "./configConversionResults.stubs";
import { joinConfigConversionResults } from "./joinConfigConversionResults";
import { SummarizedConfigResultsConfiguration } from "./summarization/types";

const createStubOriginalConfigurations = (
    overrides: Partial<AllOriginalConfigurations & SummarizedConfigResultsConfiguration> = {},
) => ({
    tslint: {
        full: {
            rulesDirectory: [],
            rules: {},
        },
        raw: {},
    },
    ...overrides,
});

describe("writeConversionResults", () => {
    it("excludes the tslint plugin when there are no missing rules", () => {
        // Arrange
        const conversionResults = createEmptyConfigConversionResults();

        // Act
        const output = joinConfigConversionResults(
            conversionResults,
            createStubOriginalConfigurations(),
        );

        // Assert
        expect(output).toEqual({
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json",
                sourceType: "module",
            },
            plugins: ["@typescript-eslint"],
            root: true,
        });
    });

    it("includes typescript-eslint plugin settings when there are missing rules", () => {
        // Arrange
        const conversionResults = createEmptyConfigConversionResults({
            missing: [
                {
                    ruleArguments: [],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                },
            ],
            plugins: new Set(["eslint-plugin-example"]),
        });

        // Act
        const output = joinConfigConversionResults(
            conversionResults,
            createStubOriginalConfigurations(),
        );

        // Assert
        expect(output).toEqual({
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json",
                sourceType: "module",
            },
            plugins: ["eslint-plugin-example", "@typescript-eslint", "@typescript-eslint/tslint"],
            root: true,
            rules: {
                "@typescript-eslint/tslint/config": [
                    "error",
                    {
                        rules: {
                            "tslint-rule-one": true,
                        },
                    },
                ],
            },
        });
    });

    it("includes the original eslint configuration when it exists", () => {
        // Arrange
        const conversionResults = createEmptyConfigConversionResults();
        const eslint = {
            full: {
                env: {},
                extends: [],
                globals: {
                    Promise: true,
                },
                rules: {},
            },
            raw: {},
        };
        const originalConfigurations = createStubOriginalConfigurations({
            eslint,
        });

        // Act
        const output = joinConfigConversionResults(conversionResults, originalConfigurations);

        // Assert
        expect(output).toEqual({
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json",
                sourceType: "module",
            },
            plugins: ["@typescript-eslint"],
            root: true,
        });
    });

    it("includes extensions when they exist", () => {
        // Arrange
        const extension = ["stub-extension"];
        const conversionResults = {
            ...createEmptyConfigConversionResults(),
            extends: extension,
        };

        // Act
        const output = joinConfigConversionResults(
            conversionResults,
            createStubOriginalConfigurations(),
        );

        // Assert
        expect(output).toEqual({
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            extends: extension,
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json",
                sourceType: "module",
            },
            plugins: ["@typescript-eslint"],
            root: true,
        });
    });

    it("includes raw globals when they exist", () => {
        // Arrange
        const conversionResults = createEmptyConfigConversionResults();
        const eslint = {
            full: {
                env: {},
                extends: [],
                rules: {},
            },
            raw: {
                globals: {
                    Promise: true,
                },
            },
        };
        const originalConfigurations = createStubOriginalConfigurations({
            eslint,
        });

        // Act
        const output = joinConfigConversionResults(conversionResults, originalConfigurations);

        // Assert
        expect(output).toEqual({
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            globals: {
                Promise: true,
            },
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json",
                sourceType: "module",
            },
            plugins: ["@typescript-eslint"],
            root: true,
        });
    });
});
