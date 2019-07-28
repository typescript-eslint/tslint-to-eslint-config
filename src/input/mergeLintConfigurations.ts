import { TSLintConfiguration } from "./findTSLintConfiguration";
import { ESLintConfiguration } from "./findESLintConfiguration";

export const mergeLintConfigurations = (
    eslint: ESLintConfiguration | Error,
    tslint: TSLintConfiguration,
) => {
    if (eslint instanceof Error) {
        return tslint;
    }

    const mappedConfig = eslint.rules["@typescript-eslint/tslint/config"];
    if (!(mappedConfig instanceof Array) || mappedConfig[0] === "off") {
        return tslint;
    }

    return {
        ...tslint,
        rules: {
            ...tslint.rules,
            ...mappedConfig[1].rules,
        },
    };
};
