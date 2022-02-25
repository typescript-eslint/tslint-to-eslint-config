import { ESLintConfiguration } from "./findESLintConfiguration.js";
import { OriginalConfigurations } from "./findOriginalConfigurations.js";
import { TSLintConfiguration } from "./findTSLintConfiguration.js";

export const mergeLintConfigurations = (
    eslint: OriginalConfigurations<ESLintConfiguration> | Error,
    tslint: OriginalConfigurations<TSLintConfiguration>,
): OriginalConfigurations<TSLintConfiguration> => {
    if (eslint instanceof Error) {
        return tslint;
    }

    const mappedConfig = eslint.full.rules?.["@typescript-eslint/tslint/config"];
    if (!(mappedConfig instanceof Array) || mappedConfig[0] === "off") {
        return tslint;
    }

    return {
        ...tslint,
        full: {
            ...tslint.full,
            rules: {
                ...tslint.full.rules,
                ...mappedConfig[1].rules,
            },
        },
    };
};
