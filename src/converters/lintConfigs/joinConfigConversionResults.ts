import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations";
import { removeEmptyMembers } from "../../utils";
import { createEnv } from "./eslint/createEnv";
import { formatConvertedRules } from "./formatConvertedRules";
import { SummarizedConfigResultsConfiguration } from "./summarization/types";

export const joinConfigConversionResults = (
    summarizedResults: SummarizedConfigResultsConfiguration,
    originalConfigurations: AllOriginalConfigurations,
) => {
    const plugins = new Set([...summarizedResults.plugins, "@typescript-eslint"]);
    const { eslint, tslint } = originalConfigurations;

    if (summarizedResults.missing.length !== 0) {
        plugins.add("@typescript-eslint/tslint");
    }

    return removeEmptyMembers({
        ...eslint?.full,
        env: createEnv(originalConfigurations),
        ...(eslint && { globals: eslint.raw.globals }),
        ...(summarizedResults.extends && { extends: summarizedResults.extends }),
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project: "tsconfig.json",
            sourceType: "module",
        },
        plugins: Array.from(plugins),
        rules: formatConvertedRules(summarizedResults, tslint.full),
    });
};

export type JoinedConversionResult = ReturnType<typeof joinConfigConversionResults>;
