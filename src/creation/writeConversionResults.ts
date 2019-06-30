import { FileSystem } from "../adapters/fileSystem";
import { TSLintConfiguration } from "../input/findTSLintConfiguration";
import { ConfigConversionResults } from "../rules/convertRules";
import { formatConvertedRules } from "./formatConvertedRules";

export type WriteConversionResultsDependencies = {
    fileSystem: Pick<FileSystem, "writeFile">;
};

export const writeConversionResults = async (
    dependencies: WriteConversionResultsDependencies,
    conversionResults: ConfigConversionResults,
    tslintConfiguration: TSLintConfiguration,
) => {
    const output = {
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project: "tsconfig.json",
        },
        ...(conversionResults.missing.length && {
            plugins: ["@typescript-eslint/tslint"],
        }),
        rules: formatConvertedRules(conversionResults, tslintConfiguration),
    };

    await dependencies.fileSystem.writeFile(".eslintrc.json", JSON.stringify(output, undefined, 4));
};
