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
                settingName: "editor.codeActionsOnSave",
                value: codeActionsOnSaveWithoutReplacedProperties,
            },
            {
                settingName: "eslint.autoFixOnSave",
                value: originalSourceFixAllTsLint,
            },
        ],
    };
};
