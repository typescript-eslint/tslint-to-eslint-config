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
    ruleConversionResults: RuleConversionResults,
    originalConfigurations: OriginalConfigurations,
) => {
    const output = {
        env: createEnv(originalConfigurations),
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project: "tsconfig.json",
        },
        ...(ruleConversionResults.missing.length && {
            plugins: ["@typescript-eslint/tslint"],
        }),
        rules: formatConvertedRules(ruleConversionResults, originalConfigurations.tslint),
    };

    await dependencies.fileSystem.writeFile(".eslintrc.json", JSON.stringify(output, undefined, 4));
};
