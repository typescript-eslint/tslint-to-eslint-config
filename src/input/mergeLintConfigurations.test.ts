import { mergeLintConfigurations } from "./mergeLintConfigurations";
import { ESLintConfiguration } from "./findESLintConfiguration";

const stubTSLintConfiguration = {
    rulesDirectory: [],
    rules: {
        disabled: true,
        enabled: true,
    },
};

describe("mergeLintConfigurations", () => {
    it("returns the tslint configuration when the eslint configuration is an error", () => {
        // Arrange
        const eslint = new Error();

        // Act
        const result = mergeLintConfigurations(eslint, stubTSLintConfiguration);

        // Assert
        expect(result).toBe(stubTSLintConfiguration);
    });

    it("returns the tslint configuration when the eslint configuration doesn't have tslint rules", () => {
        // Arrange
        const eslint: ESLintConfiguration = {
            env: {},
            extends: [],
            rules: {},
        };

        // Act
        const result = mergeLintConfigurations(eslint, stubTSLintConfiguration);

        // Assert
        expect(result).toBe(stubTSLintConfiguration);
    });

    it("returns the tslint configuration when the eslint configuration's tslint rules are disabled", () => {
        // Arrange
        const eslint: ESLintConfiguration = {
            env: {},
            extends: [],
            rules: {
                "@typescript-eslint/tslint/config": [
                    "off",
                    {
                        extra: true,
                    },
                ],
            },
        };

        // Act
        const result = mergeLintConfigurations(eslint, stubTSLintConfiguration);

        // Assert
        expect(result).toBe(stubTSLintConfiguration);
    });

    it("returns the merged configurations when the eslint configuration has tslint rules", () => {
        // Arrange
        const extraRules = {
            extra: true,
        };
        const eslint: ESLintConfiguration = {
            env: {},
            extends: [],
            rules: {
                "@typescript-eslint/tslint/config": [
                    "error",
                    {
                        rules: extraRules,
                    },
                ],
            },
        };

        // Act
        const result = mergeLintConfigurations(eslint, stubTSLintConfiguration);

        // Assert
        expect(result).toEqual({
            ...stubTSLintConfiguration,
            rules: {
                ...stubTSLintConfiguration.rules,
                ...extraRules,
            },
        });
    });
});
