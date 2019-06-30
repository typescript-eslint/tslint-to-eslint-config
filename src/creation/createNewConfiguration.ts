import { FileSystem } from "../adapters/fileSystem";
import { TSLintConfiguration } from "../input/findTslintConfiguration";
import { ConfigConversionResults } from "../rules/convertRules";
import { formatConvertedRules } from "./formatConvertedRules";

export type CreateNewConfigurationDependencies = {
    fileSystem: Pick<FileSystem, "writeFile">;
};

export const createNewConfiguration = async (
    dependencies: CreateNewConfigurationDependencies,
    conversionResults: ConfigConversionResults,
    originalConfiguration: TSLintConfiguration,
) => {
    const output = {
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project: "tsconfig.json",
        },
        ...(conversionResults.missing.length && {
            plugins: ["@typescript-eslint/tslint"],
        }),
        rules: formatConvertedRules(conversionResults, originalConfiguration),
    };

    await dependencies.fileSystem.writeFile(".eslintrc.json", JSON.stringify(output, undefined, 4));
};
