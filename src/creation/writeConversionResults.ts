import { FileSystem } from "../adapters/fileSystem";
import { AllOriginalConfigurations } from "../input/findOriginalConfigurations";
import { createEnv } from "./eslint/createEnv";
import { formatConvertedRules } from "./formatConvertedRules";
import { formatOutput } from "./formatting/formatOutput";
import { SummarizedResultsConfiguration } from "./summarization/types";

export type WriteConversionResultsDependencies = {
    fileSystem: Pick<FileSystem, "writeFile">;
};

export const writeConversionResults = async (
    dependencies: WriteConversionResultsDependencies,
    outputPath: string,
    summarizedResults: SummarizedResultsConfiguration,
    originalConfigurations: AllOriginalConfigurations,
) => {
    const plugins = ["@typescript-eslint"];
    const { eslint, tslint } = originalConfigurations;

    if (summarizedResults.missing.length !== 0) {
        plugins.push("@typescript-eslint/tslint");
    }

    const output = {
        ...eslint?.full,
        env: createEnv(originalConfigurations),
        ...(eslint && { globals: eslint.raw.globals }),
        ...(summarizedResults.extends && { extends: summarizedResults.extends }),
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project: "tsconfig.json",
            sourceType: "module",
        },
        plugins,
        rules: {
            ...formatESLintRules(eslint?.full.rules, summarizedResults),
            ...formatConvertedRules(summarizedResults, tslint.full),
        },
    };

    return await dependencies.fileSystem.writeFile(outputPath, formatOutput(outputPath, output));
};
