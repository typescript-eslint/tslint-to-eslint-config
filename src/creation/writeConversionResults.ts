import { FileSystem } from "../adapters/fileSystem";
import { RuleConversionResults } from "../rules/convertRules";
import { AllOriginalConfigurations } from "../input/findOriginalConfigurations";
import { createEnv } from "./eslint/createEnv";
import { formatConvertedRules } from "./formatConvertedRules";
import { formatOutput } from "./formatting/formatOutput";
import { SimplifiedRuleConversionResults } from "./simplification/simplifyPackageRules";

export type WriteConversionResultsDependencies = {
    fileSystem: Pick<FileSystem, "writeFile">;
};

export const writeConversionResults = async (
    dependencies: WriteConversionResultsDependencies,
    outputPath: string,
    ruleConversionResults: RuleConversionResults & SimplifiedRuleConversionResults,
    originalConfigurations: AllOriginalConfigurations,
): Promise<undefined | Error> => {
    const plugins = ["@typescript-eslint"];
    const { eslint, tslint } = originalConfigurations;

    if (ruleConversionResults.missing.length !== 0) {
        plugins.push("@typescript-eslint/tslint");
    }

    const output = {
        ...eslint?.full,
        env: createEnv(originalConfigurations),
        ...(eslint && { globals: eslint.raw.globals }),
        ...(ruleConversionResults.extends && { extends: ruleConversionResults.extends }),
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
