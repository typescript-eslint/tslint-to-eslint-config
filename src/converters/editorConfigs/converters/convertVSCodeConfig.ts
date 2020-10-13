import { merge } from "lodash";
import * as path from "path";

import { parseJson } from "../../../utils";
import { EditorConfigConverter } from "../types";

export const convertVSCodeConfig: EditorConfigConverter = (rawEditorSettings, settings) => {
    const editorSettings = parseJson(rawEditorSettings);
    const autoFixOnSave = editorSettings["editor.codeActionsOnSave"]?.["source.fixAll.tslint"];

    // Only create a new config file path if the input and output configs roughly match
    const eslintPathMatches =
        editorSettings["tslint.configFile"] &&
        !path.relative(
            path.dirname(editorSettings["tslint.configFile"]),
            path.dirname(settings.config),
        );

    return JSON.stringify(
        merge(
            {},
            editorSettings,
            autoFixOnSave !== undefined && {
                "editor.codeActionsOnSave": {
                    "eslint.autoFixOnSave": autoFixOnSave,
                },
            },
            eslintPathMatches && {
                "eslint.options": {
                    configFile: settings.config,
                },
            },
        ),
    );
};
