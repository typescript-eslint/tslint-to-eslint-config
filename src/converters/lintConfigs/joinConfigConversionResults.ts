import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations.js";
import { removeEmptyMembers } from "../../utils.js";
import { createEnv } from "./eslint/createEnv.js";
import { formatConvertedRules } from "./formatConvertedRules.js";
import { SummarizedConfigResultsConfiguration } from "./summarization/types.js";

/**
 * Turns a raw ESLint configuration summary into ESLint's configuration shape.
 */
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
