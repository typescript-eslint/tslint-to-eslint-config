import * as CsonParser from "cson-parser";
import merge from "lodash/merge.js";

const knownMissingSettings = ["enableSemanticRules", "rulesDirectory"];

export const convertAtomConfig = (rawEditorSettings: string) => {
    const editorSettings = CsonParser.parse(rawEditorSettings);
    const linterSettings = editorSettings["linter-tslint"];
    const useLocalTslint = linterSettings?.useLocalTslint;

    const contents = CsonParser.stringify(
        merge(
            editorSettings,
            useLocalTslint !== undefined && {
                "linter-eslint": {
                    global: {
                        ...{ useGlobalEslint: !useLocalTslint },
                    },
                },
            },
        ),
        null,
        4,
    );

    const missing = knownMissingSettings.filter((setting) => linterSettings?.[setting]);

    return { contents, missing };
};
