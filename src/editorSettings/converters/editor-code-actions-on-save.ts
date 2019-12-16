import { EditorSettingConverter } from "../converter";

const SUB_SETTING_SOURCE_FIXALL = "source.fixAll.tslint";

export const convertEditorCodeActionsOnSave: EditorSettingConverter = originalCodeActionsOnSave => {
    // Split properties to replace (into parent) and original ones.
    const {
        [SUB_SETTING_SOURCE_FIXALL]: originalSourceFixAllTsLint,
        ...codeActionsOnSaveWithoutReplacedProperties
    } = originalCodeActionsOnSave.value;

    return {
        settings: [
            {
                editorSettingName: "editor.codeActionsOnSave",
                value: codeActionsOnSaveWithoutReplacedProperties,
            },
            {
                editorSettingName: "eslint.autoFixOnSave",
                value: originalSourceFixAllTsLint,
            },
        ],
    };
};
