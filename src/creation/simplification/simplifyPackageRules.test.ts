import { ConfigurationError } from "../../errors/configurationError";
import { ESLintRuleOptions } from "../../rules/types";
import { createEmptyConversionResults } from "../../conversion/conversionResults.stubs";
import { simplifyPackageRules } from "./simplifyPackageRules";

const createStubDependencies = () => ({
    removeExtendsDuplicatedRules: jest.fn(),
    retrieveExtendsValues: async () => ({
        configurationErrors: [],
        importedExtensions: [],
    }),
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

describe("simplifyPackageRules", () => {
    it("returns equivalent conversion results when there is no loaded ESLint configuration and no TSLint extensions", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const eslint = undefined;
        const tslint = createStubTSLintConfiguration();
        const ruleConversionResults = createEmptyConversionResults();

        // Act
        const simplifiedResults = await simplifyPackageRules(
            dependencies,
            eslint,
            tslint,
            ruleConversionResults,
        );

        // Assert
        expect(simplifiedResults).toEqual(ruleConversionResults);
    });

    it("adds Prettier extensions when the prettier setting is enabled", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const eslint = undefined;
        const tslint = createStubTSLintConfiguration();
        const ruleConversionResults = createEmptyConversionResults();

        // Act
        const simplifiedResults = await simplifyPackageRules(
            dependencies,
            eslint,
            tslint,
            ruleConversionResults,
            true,
        );

        // Assert
        expect(simplifiedResults).toEqual({
            ...ruleConversionResults,
            converted: undefined,
            extends: ["eslint-config-prettier", "eslint-config-prettier/@typescript-eslint"],
        });
    });

    it("returns equivalent conversion results when there is an empty ESLint configuration and no TSLint extensions", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const eslint = createStubESLintConfiguration([]);
        const tslint = createStubTSLintConfiguration();
        const ruleConversionResults = createEmptyConversionResults();

        // Act
        const simplifiedResults = await simplifyPackageRules(
            dependencies,
            eslint,
            tslint,
            ruleConversionResults,
        );

        // Assert
        expect(simplifiedResults).toEqual(ruleConversionResults);
    });

    it("includes deduplicated rules and extension failures when the ESLint configuration extends", async () => {
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
        const eslintExtends = ["extension-name"];
        const eslint = createStubESLintConfiguration(eslintExtends);
        const tslint = createStubTSLintConfiguration();
        const ruleConversionResults = createEmptyConversionResults();

        // Act
        const simplifiedResults = await simplifyPackageRules(
            dependencies,
            eslint,
            tslint,
            ruleConversionResults,
        );

        // Assert
        expect(simplifiedResults).toEqual({
            ...ruleConversionResults,
            converted: deduplicatedRules,
            extends: [...eslintExtends],
            failed: configurationErrors,
        });
    });
});
