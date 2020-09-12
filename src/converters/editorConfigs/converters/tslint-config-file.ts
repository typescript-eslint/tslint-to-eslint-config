import * as path from "path";

import { EditorSettingConverter } from "../converter";

export const convertTSLintConfigFile: EditorSettingConverter = (
    originalTSLintConfigFile,
    settings,
) => {
    // If the output ESLint config path doesn't roughly match the original TSLint path, skip this.
    const tslintPath = originalTSLintConfigFile.value;
    const eslintPath = settings.config;
    if (path.relative(path.dirname(tslintPath), path.dirname(eslintPath))) {
        return undefined;
    }

    return {
        settings: [
            {
                editorSettingName: "eslint.options",
                value: { configFile: settings.config },
            },
        ],
    };
};
