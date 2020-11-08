import { convertVSCodeConfig } from "./convertVSCodeConfig";

const stubSettings = {
    config: ".eslintrc.js",
};

describe("convertVSCodeConfig", () => {
    it("preserves original settings when no TSLint settings exist", () => {
        // Arrange
        const editorSettings = { unrelated: true };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings), stubSettings);

        // Assert
        expect(result).toEqual({
            contents: JSON.stringify(editorSettings, null, 4),
            missing: [],
        });
    });

    it("includes eslint.autoFixOnSave when source.fixAll.tslint exists", () => {
        // Arrange
        const editorSettings = {
            "editor.codeActionsOnSave": {
                "source.fixAll.tslint": true,
            },
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings), stubSettings);

        // Assert
        expect(result).toEqual({
            contents: JSON.stringify(
                {
                    "editor.codeActionsOnSave": {
                        "source.fixAll.tslint": true,
                        "eslint.autoFixOnSave": true,
                    },
                    unrelated: true,
                },
                null,
                4,
            ),
            missing: [],
        });
    });

    it("does not include configFile when tslint.configFile does not match the output config", () => {
        // Arrange
        const editorSettings = {
            "tslint.configFile": "unrelated/path/tsconfig.json",
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings), stubSettings);

        // Assert
        expect(result).toEqual({
            contents: JSON.stringify(editorSettings, null, 4),
            missing: [],
        });
    });

    it("includes configFile when tslint.configFile matches", () => {
        // Arrange
        const editorSettings = {
            "tslint.configFile": "./tslint.json",
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings), stubSettings);

        // Assert
        expect(result).toEqual({
            contents: JSON.stringify(
                {
                    "tslint.configFile": "./tslint.json",
                    unrelated: true,
                    "eslint.options": {
                        configFile: stubSettings.config,
                    },
                },
                null,
                4,
            ),
            missing: [],
        });
    });

    it("includes missing notices when known missing settings are included", () => {
        // Arrange
        const editorSettings = {
            "tslint.alwaysShowRuleFailuresAsWarnings": true,
            "tslint.exclude": true,
            "tslint.ignoreDefinitionFiles": true,
            "tslint.jsEnable": true,
            "tslint.suppressWhileTypeErrorsPresent": true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings), stubSettings);

        // Assert
        expect(result).toEqual({
            contents: JSON.stringify(editorSettings, null, 4),
            missing: [
                "tslint.alwaysShowRuleFailuresAsWarnings",
                "tslint.exclude",
                "tslint.ignoreDefinitionFiles",
                "tslint.jsEnable",
                "tslint.suppressWhileTypeErrorsPresent",
            ],
        });
    });
});
