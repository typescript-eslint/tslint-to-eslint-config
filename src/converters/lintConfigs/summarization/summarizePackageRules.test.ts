import { describe, expect, it } from "@jest/globals";

import { ConfigurationError } from "../../../errors/configurationError";
import { fn } from "../../../fn";
import { createEmptyConfigConversionResults } from "../configConversionResults.stubs";
import { ESLintRuleOptionsWithArguments } from "../rules/types";
import { checkPrettierExtension } from "./prettier/checkPrettierExtension";
import { summarizePackageRules, SummarizePackageRulesDependencies } from "./summarizePackageRules";

const createStubDependencies = (overrides: Partial<SummarizePackageRulesDependencies> = {}) => ({
    checkPrettierExtension: fn<typeof checkPrettierExtension>(),
    removeExtendsDuplicatedRules: () => ({
        differentRules: new Map(),
        extensionRules: new Map(),
    }),
    retrieveExtendsValues: async () => ({
        configurationErrors: [],
        importedExtensions: [],
    }),
    ...overrides,
});

const createStubESLintConfiguration = (fullExtends: string[]) => ({
    full: {
        env: {},
        extends: fullExtends,
        rules: {},
    },
});

const createStubTSLintConfiguration = () => ({
    full: {},
    raw: {},
});

describe("summarizePackageRules", () => {
    it("returns equivalent conversion results when there is no loaded ESLint configuration and no TSLint extensions", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const eslint = undefined;
        const tslint = createStubTSLintConfiguration();
        const ruleConversionResults = createEmptyConfigConversionResults();

        // Act
        const summarizedResults = await summarizePackageRules(
            dependencies,
            eslint,
            tslint,
            ruleConversionResults,
        );

        // Assert
        expect(summarizedResults).toEqual(ruleConversionResults);
    });

    it("adds Prettier extensions when checkPrettierExtension returns true", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            checkPrettierExtension: () => true,
        });
        const eslint = undefined;
        const tslint = createStubTSLintConfiguration();
        const ruleConversionResults = createEmptyConfigConversionResults();

        // Act
        const summarizedResults = await summarizePackageRules(
            dependencies,
            eslint,
            tslint,
            ruleConversionResults,
            true,
        );

        // Assert
        expect(summarizedResults).toEqual({
            ...ruleConversionResults,
            converted: new Map(),
            extends: ["prettier"],
        });
    });

    it("returns equivalent conversion results when there is an empty ESLint configuration and no TSLint extensions", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const eslint = createStubESLintConfiguration([]);
        const tslint = createStubTSLintConfiguration();
        const ruleConversionResults = createEmptyConfigConversionResults();

        // Act
        const summarizedResults = await summarizePackageRules(
            dependencies,
            eslint,
            tslint,
            ruleConversionResults,
        );

        // Assert
        expect(summarizedResults).toEqual(ruleConversionResults);
    });

    it("includes deduplicated rules and extension failures when the ESLint configuration extends", async () => {
        // Arrange
        const configurationErrors = [new ConfigurationError(new Error("oh no"), "darn")];
        const differentRules = new Map<string, ESLintRuleOptionsWithArguments>([
            [
                "rule-name",
                {
                    ruleArguments: [],
                    ruleName: "rule-name",
                    ruleSeverity: "warn",
                },
            ],
        ]);
        const extensionRules = new Map(differentRules);
        const dependencies = createStubDependencies({
            removeExtendsDuplicatedRules: () => ({ differentRules, extensionRules }),
            retrieveExtendsValues: async () => ({
                configurationErrors,
                importedExtensions: [],
            }),
        });
        const eslintExtends = ["extension-name"];
        const eslint = createStubESLintConfiguration(eslintExtends);
        const tslint = createStubTSLintConfiguration();
        const ruleConversionResults = createEmptyConfigConversionResults();

        // Act
        const summarizedResults = await summarizePackageRules(
            dependencies,
            eslint,
            tslint,
            ruleConversionResults,
        );

        // Assert
        expect(summarizedResults).toEqual({
            ...ruleConversionResults,
            extensionRules: new Map([
                [
                    "rule-name",
                    {
                        ruleArguments: [],
                        ruleName: "rule-name",
                        ruleSeverity: "warn",
                    },
                ],
            ]),
            converted: differentRules,
            extends: [...eslintExtends],
            failed: configurationErrors,
        });
    });
});
