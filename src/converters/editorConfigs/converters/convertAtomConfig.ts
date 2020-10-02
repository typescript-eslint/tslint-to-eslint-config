import * as CsonParser from "cson-parser";

import { EditorConfigConverter } from "../types";

export const convertAtomConfig: EditorConfigConverter = (rawEditorSettings) => {
    const editorSettings = CsonParser.parse(rawEditorSettings);
    const useLocalTslint = editorSettings?.["linter-tslint"]?.useLocalTslint;

    return mergeCson({
        "linter-eslint": {
            global: {
                ...(useLocalTslint !== undefined && { useGlobalEslint: !useLocalTslint }),
            },
        },
    });
};
