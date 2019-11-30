import { convertEditorCodeActionsOnSave } from "../editor-code-actions-on-save";

describe(convertEditorCodeActionsOnSave, () => {
    test("conversion of 'source.fixAll.tslint' when value is true", () => {
        const result = convertEditorCodeActionsOnSave({
            settingName: "editor.codeActionsOnSave",
            value: {
                "source.fixAll.tslint": true,
            },
        });

        expect(result).toEqual({
            settings: [
                {
                    settingName: "editor.codeActionsOnSave",
                    value: {},
                },
                {
                    settingName: "eslint.autoFixOnSave",
                    value: true,
                },
            ],
        });
    });

    test("conversion of 'source.fixAll.tslint' when value is false", () => {
        const result = convertEditorCodeActionsOnSave({
            settingName: "editor.codeActionsOnSave",
            value: {
                "source.fixAll.tslint": false,
            },
        });

        expect(result).toEqual({
            settings: [
                {
                    settingName: "editor.codeActionsOnSave",
                    value: {},
                },
                {
                    settingName: "eslint.autoFixOnSave",
                    value: false,
                },
            ],
        });
    });

    test("conversion of 'source.fixAll.tslint' without touching any other 'editor.codeActionsOnSave'", () => {
        const result = convertEditorCodeActionsOnSave({
            settingName: "editor.codeActionsOnSave",
            value: {
                "one-property": 42,
                "source.fixAll.tslint": true,
                "another-property": "foo",
            },
        });

        expect(result).toEqual({
            settings: [
                {
                    settingName: "editor.codeActionsOnSave",
                    value: {
                        "one-property": 42,
                        "another-property": "foo",
                    },
                },
                {
                    settingName: "eslint.autoFixOnSave",
                    value: true,
                },
            ],
        });
    });
});
