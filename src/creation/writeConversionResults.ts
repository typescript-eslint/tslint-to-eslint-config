import { FileSystem } from "../adapters/fileSystem";
import { RuleConversionResults } from "../rules/convertRules";
import { formatConvertedRules } from "./formatConvertedRules";
import { AllOriginalConfigurations } from "../input/findOriginalConfigurations";
import { createEnv } from "./eslint/createEnv";
import { formatOutput } from "./formatting/formatOutput";

export type WriteConversionResultsDependencies = {
    fileSystem: Pick<FileSystem, "writeFile">;
};

export const writeConversionResults = async (
    dependencies: WriteConversionResultsDependencies,
    outputPath: string,
    ruleConversionResults: RuleConversionResults,
    originalConfigurations: AllOriginalConfigurations,
) => {
    const plugins = ["@typescript-eslint"];
    const { eslint, tslint } = originalConfigurations;

    if (ruleConversionResults.missing.length !== 0) {
        plugins.push("@typescript-eslint/tslint");
    }

    const output = {
        ...eslint?.full,
        env: createEnv(originalConfigurations),
        ...(eslint && { globals: eslint.raw.globals }),
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project: "tsconfig.json",
            sourceType: "module",
        },
        plugins,
        rules: {
            ...eslint?.full.rules,
            ...formatConvertedRules(ruleConversionResults, tslint.full),
        },
    };

    return await dependencies.fileSystem.writeFile(outputPath, formatOutput(outputPath, output));
};
