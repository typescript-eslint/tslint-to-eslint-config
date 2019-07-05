import { FileSystem } from "../adapters/fileSystem";
import { RuleConversionResults } from "../rules/convertRules";
import { formatConvertedRules } from "./formatConvertedRules";
import { OriginalConfigurations } from "../input/findOriginalConfigurations";
import { createEnv } from "./eslint/createEnv";

export type WriteConversionResultsDependencies = {
    fileSystem: Pick<FileSystem, "writeFile">;
};

export const writeConversionResults = async (
    dependencies: WriteConversionResultsDependencies,
    outputPath: string,
    ruleConversionResults: RuleConversionResults,
    originalConfigurations: OriginalConfigurations,
) => {
    const plugins = ["@typescript-eslint"];

    if (ruleConversionResults.missing.length !== 0) {
        plugins.push("@typescript-eslint/tslint");
    }
    const output = {
        env: createEnv(originalConfigurations),
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project: "tsconfig.json",
            sourceType: "module",
        },
        plugins,
        rules: formatConvertedRules(ruleConversionResults, originalConfigurations.tslint),
    };

    await dependencies.fileSystem.writeFile(outputPath, JSON.stringify(output, undefined, 4));
};
