import * as CsonParser from "cson-parser";
import { merge } from "lodash";

export const convertAtomConfig = (rawEditorSettings: string) => {
    const editorSettings = CsonParser.parse(rawEditorSettings);
    const useLocalTslint = editorSettings["linter-tslint"]?.useLocalTslint;

    return CsonParser.stringify(
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
    );
};
