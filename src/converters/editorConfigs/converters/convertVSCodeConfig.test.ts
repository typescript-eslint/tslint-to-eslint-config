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
        expect(result).toEqual(JSON.stringify(editorSettings));
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
        expect(result).toEqual(
            JSON.stringify({
                "editor.codeActionsOnSave": {
                    "source.fixAll.tslint": true,
                    "eslint.autoFixOnSave": true,
                },
                unrelated: true,
            }),
        );
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
        expect(result).toEqual(JSON.stringify(editorSettings));
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
        expect(result).toEqual(
            JSON.stringify({
                "tslint.configFile": "./tslint.json",
                unrelated: true,
                "eslint.options": {
                    configFile: stubSettings.config,
                },
            }),
        );
    });
});
