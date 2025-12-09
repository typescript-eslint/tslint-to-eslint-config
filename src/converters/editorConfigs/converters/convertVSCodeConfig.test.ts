import { describe, expect, it } from "@jest/globals";

import { convertVSCodeConfig } from "./convertVSCodeConfig";

const stubSettings = {
    config: ".eslintrc.js",
};

describe("convertVSCodeConfig", () => {
    it("preserves original settings when no TSLint settings exist", () => {
        // Arrange
        const editorSettings = { unrelated: true };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"unrelated\\": true
}",
  "missing": Array [],
}
`);
    });

    it("preserves original settings when the input structure is not an object", () => {
        // Arrange
        const editorSettings: never[] = [];

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "[]",
  "missing": Array [],
}
`);
    });

    it("does not include eslint.autoFixOnSave when editor.codeActionsOnSave is false", () => {
        // Arrange
        const editorSettings = {
            "editor.codeActionsOnSave": false,
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"editor.codeActionsOnSave\\": false,
    \\"unrelated\\": true
}",
  "missing": Array [],
}
`);
    });

    it("does not include eslint.autoFixOnSave when editor.codeActionsOnSave is null", () => {
        // Arrange
        const editorSettings = {
            "editor.codeActionsOnSave": null,
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"editor.codeActionsOnSave\\": null,
    \\"unrelated\\": true
}",
  "missing": Array [],
}
`);
    });

    it("does not include eslint.autoFixOnSave when editor.codeActionsOnSave is a number", () => {
        // Arrange
        const editorSettings = {
            "editor.codeActionsOnSave": 1,
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"editor.codeActionsOnSave\\": 1,
    \\"unrelated\\": true
}",
  "missing": Array [],
}
`);
    });

    it("does not include eslint.autoFixOnSave when editor.codeActionsOnSave is an empty object", () => {
        // Arrange
        const editorSettings = {
            "editor.codeActionsOnSave": {},
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"editor.codeActionsOnSave\\": {},
    \\"unrelated\\": true
}",
  "missing": Array [],
}
`);
    });

    it("does not include eslint.autoFixOnSave when source.fixAll.tslint is false", () => {
        // Arrange
        const editorSettings = {
            "editor.codeActionsOnSave": {
                "source.fixAll.tslint": false,
            },
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"editor.codeActionsOnSave\\": {
        \\"source.fixAll.tslint\\": false
    },
    \\"unrelated\\": true
}",
  "missing": Array [],
}
`);
    });

    it("includes eslint.autoFixOnSave when source.fixAll.tslint is true", () => {
        // Arrange
        const editorSettings = {
            "editor.codeActionsOnSave": {
                "source.fixAll.tslint": true,
            },
            unrelated: false,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"editor.codeActionsOnSave\\": {
        \\"source.fixAll.tslint\\": true,
        \\"eslint.autoFixOnSave\\": true
    },
    \\"unrelated\\": false
}
",
  "missing": Array [],
}
`);
    });

    it("does not include configFile when tslint.configFile does not match the output config", () => {
        // Arrange
        const editorSettings = {
            "tslint.configFile": "unrelated/path/tsconfig.json",
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toEqual({
            contents: JSON.stringify(editorSettings, null, 4),
            missing: [],
        });
    });

    it("does not include configFile when tslint.configFile is a number", () => {
        // Arrange
        const editorSettings = {
            "tslint.configFile": 1,
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

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
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"tslint.configFile\\": \\"./tslint.json\\",
    \\"unrelated\\": true,
    \\"eslint.options\\": {
        \\"configFile\\": \\".eslintrc.js\\"
    }
}
",
  "missing": Array [],
}
`);
    });

    it("does not include configFile when tslint.configFile does not match", () => {
        // Arrange
        const editorSettings = {
            "tslint.configFile": "../other.json",
            unrelated: true,
        };

        // Act
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"tslint.configFile\\": \\"../other.json\\",
    \\"unrelated\\": true
}",
  "missing": Array [],
}
`);
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
        const result = convertVSCodeConfig(JSON.stringify(editorSettings, null, 4), stubSettings);

        // Assert
        expect(result).toMatchInlineSnapshot(`
Object {
  "contents": "{
    \\"tslint.alwaysShowRuleFailuresAsWarnings\\": true,
    \\"tslint.exclude\\": true,
    \\"tslint.ignoreDefinitionFiles\\": true,
    \\"tslint.jsEnable\\": true,
    \\"tslint.suppressWhileTypeErrorsPresent\\": true
}",
  "missing": Array [
    "tslint.alwaysShowRuleFailuresAsWarnings",
    "tslint.exclude",
    "tslint.ignoreDefinitionFiles",
    "tslint.jsEnable",
    "tslint.suppressWhileTypeErrorsPresent",
  ],
}
`);
    });
});
