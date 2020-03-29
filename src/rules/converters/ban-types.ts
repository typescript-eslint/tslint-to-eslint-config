import { RuleConverter } from "../converter";

export const convertBanTypes: RuleConverter = tslintRule => {
    type ConvertBanTypeArgument = {
        message: string;
    };

    const bannedTypesObj: { [key: string]: ConvertBanTypeArgument | null } = {};

    for (const rule of tslintRule.ruleArguments) {
        const typ = rule[0];
        if (!typ) {
            break;
        }

        bannedTypesObj[typ] = rule[1]
            ? {
                  message: rule[1],
              }
            : null;
    }

    const ruleArguments =
        Object.keys(bannedTypesObj).length === 0 ? undefined : [{ types: bannedTypesObj }];

    return {
        rules: [
            {
                ruleName: "@typescript-eslint/ban-types",
                ...{ ruleArguments },
            },
        ],
    };
};
