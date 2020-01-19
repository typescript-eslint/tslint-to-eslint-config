import { mergeLintConfigurations } from "./mergeLintConfigurations";
import { ESLintConfiguration } from "./findESLintConfiguration";
import { OriginalConfigurations } from "./findOriginalConfigurations";
import { TSLintConfiguration } from "./findTSLintConfiguration";

const stubTSLintConfiguration: OriginalConfigurations<TSLintConfiguration> = {
    full: {
        rulesDirectory: [],
        rules: {
            disabled: true,
            enabled: true,
        },
    },
    raw: {},
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
        const eslint: OriginalConfigurations<ESLintConfiguration> = {
            full: {
                env: {},
                extends: [],
                rules: {},
            },
            raw: {},
        };

        // Act
        const result = mergeLintConfigurations(eslint, stubTSLintConfiguration);

        // Assert
        expect(result).toBe(stubTSLintConfiguration);
    });

    it("returns the tslint configuration when the eslint configuration's tslint rules are disabled", () => {
        // Arrange
        const eslint: OriginalConfigurations<ESLintConfiguration> = {
            full: {
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
            },
            raw: {},
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
        const eslint: OriginalConfigurations<ESLintConfiguration> = {
            full: {
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
            },
            raw: {},
        };

        // Act
        const result = mergeLintConfigurations(eslint, stubTSLintConfiguration);

        // Assert
        expect(result).toEqual({
            ...stubTSLintConfiguration,
            full: {
                ...stubTSLintConfiguration.full,
                rules: {
                    ...stubTSLintConfiguration.full.rules,
                    ...extraRules,
                },
            },
        });
    });
});
