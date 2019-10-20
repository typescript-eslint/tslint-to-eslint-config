import { ConfigurationError } from "../../errors/configurationError";
import { ESLintRuleOptions } from "../../rules/types";
import { createEmptyConversionResults } from "../../conversion/conversionResults.stubs";
import { simplifyPackageRules } from "./simplifyPackageRules";

const createStubDependencies = () => ({
    removeExtendsDuplicatedRules: jest.fn(),
    retrieveExtendsValues: jest.fn(),
});

const createStubESLintConfiguration = (fullExtends: string | string[]) => ({
    full: {
        env: {},
        extends: fullExtends,
        rules: {},
    },
});

describe("simplifyPackageRules", () => {
    it("returns the conversion results directly when there is no loaded eslint configuration", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const eslint = undefined;
        const ruleConversionResults = createEmptyConversionResults();

        // Act
        const simplifiedResults = await simplifyPackageRules(
            dependencies,
            eslint,
            ruleConversionResults,
        );

        // Assert
        expect(simplifiedResults).toBe(ruleConversionResults);
    });

    it("returns the conversion results directly when the eslint configuration has an empty extends", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const eslint = createStubESLintConfiguration([]);
        const ruleConversionResults = createEmptyConversionResults();

        // Act
        const simplifiedResults = await simplifyPackageRules(
            dependencies,
            eslint,
            ruleConversionResults,
        );

        // Assert
        expect(simplifiedResults).toBe(ruleConversionResults);
    });

    it("includes deduplicated rules and extension failures when the eslint configuration extends", async () => {
        // Arrange
        const configurationErrors = [new ConfigurationError(new Error("oh no"), "darn")];
        const deduplicatedRules = new Map<string, ESLintRuleOptions>([
            [
                "rule-name",
                {
                    ruleArguments: [],
                    ruleName: "rule-name",
                    ruleSeverity: "warn",
                },
            ],
        ]);
        const dependencies = {
            removeExtendsDuplicatedRules: () => deduplicatedRules,
            retrieveExtendsValues: async () => ({
                configurationErrors,
                importedExtensions: [],
            }),
        };
        const eslint = createStubESLintConfiguration(["extension-name"]);
        const ruleConversionResults = createEmptyConversionResults();

        // Act
        const simplifiedResults = await simplifyPackageRules(
            dependencies,
            eslint,
            ruleConversionResults,
        );

        // Assert
        expect(simplifiedResults).toEqual({
            converted: deduplicatedRules,
            failed: configurationErrors,
        });
    });
});
