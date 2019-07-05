import { createEmptyConversionResults } from "../conversion/conversionResults.stubs";
import { writeConversionResults } from "./writeConversionResults";
import { OriginalConfigurations } from "../input/findOriginalConfigurations";
import { formatJsonOutput } from "./formatting/formatters/formatJsonOutput";

const createStubOriginalConfigurations = (overrides: Partial<OriginalConfigurations> = {}) => ({
    tslint: {
        rulesDirectory: [],
        rules: {},
    },
    ...overrides,
});

describe("writeConversionResults", () => {
    it("excludes the tslint plugin when there are no missing rules", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map(),
        });
        const fileSystem = { writeFile: jest.fn().mockReturnValue(Promise.resolve()) };

        // Act
        await writeConversionResults(
            { fileSystem },
            ".eslintrc.json",
            conversionResults,
            createStubOriginalConfigurations(),
        );

        // Assert
        expect(fileSystem.writeFile).toHaveBeenLastCalledWith(
            ".eslintrc.json",
            formatJsonOutput({
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
                rules: {},
            }),
        );
    });

    it("includes typescript-eslint plugin settings when there are missing rules", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map(),
            missing: [
                {
                    ruleArguments: [],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                },
            ],
        });
        const fileSystem = { writeFile: jest.fn().mockReturnValue(Promise.resolve()) };

        // Act
        await writeConversionResults(
            { fileSystem },
            ".eslintrc.json",
            conversionResults,
            createStubOriginalConfigurations(),
        );

        // Assert
        expect(fileSystem.writeFile).toHaveBeenLastCalledWith(
            ".eslintrc.json",
            formatJsonOutput({
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
                plugins: ["@typescript-eslint", "@typescript-eslint/tslint"],
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
            }),
        );
    });

    it("includes the original eslint configuration when it exists", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map(),
        });
        const eslint = {
            env: {},
            extends: [],
            globals: {
                Promise: true,
            },
            rules: {},
        };
        const originalConfigurations = createStubOriginalConfigurations({
            eslint,
        });
        const fileSystem = { writeFile: jest.fn().mockReturnValue(Promise.resolve()) };

        // Act
        await writeConversionResults(
            { fileSystem },
            ".eslintrc.json",
            conversionResults,
            originalConfigurations,
        );

        // Assert
        expect(fileSystem.writeFile).toHaveBeenLastCalledWith(
            ".eslintrc.json",
            formatJsonOutput({
                ...eslint,
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
                rules: {},
            }),
        );
    });
});
