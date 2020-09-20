import { convertTSLintConfigFile } from "../tslint-config-file";

describe(convertTSLintConfigFile, () => {
    test("conversion of 'tslint.configFile' when it roughly equals the ESLint file", () => {
        const result = convertTSLintConfigFile(
            {
                editorSettingName: "tslint.configFile",
                value: "./custom/tslint.json",
            },
            { config: "./custom/eslintrc.js" },
        );

        expect(result).toEqual({
            settings: [
                {
                    editorSettingName: "eslint.options",
                    value: { configFile: "./custom/eslintrc.js" },
                },
            ],
        });
    });

    test("conversion of 'tslint.configFile' when it does not roughly equal the ESLint file", () => {
        const result = convertTSLintConfigFile(
            {
                editorSettingName: "tslint.configFile",
                value: "./custom/tslint.json",
            },
            { config: "./eslintrc.js" },
        );

        expect(result).toEqual(undefined);
    });
});
