import { ESLintConfiguration } from "./findESLintConfiguration";
import { OriginalConfigurations } from "./findOriginalConfigurations";
import { TSLintConfiguration } from "./findTSLintConfiguration";

export const mergeLintConfigurations = (
    eslint: Error | OriginalConfigurations<ESLintConfiguration>,
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
