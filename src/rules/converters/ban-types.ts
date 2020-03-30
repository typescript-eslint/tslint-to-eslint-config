import { RuleConverter } from "../converter";

export const convertBanTypes: RuleConverter = tslintRule => {
    type ConvertBanTypeArgument = {
        message: string;
    };

    const bannedTypes: Record<string, ConvertBanTypeArgument | null> = {};

    for (const rule of tslintRule.ruleArguments) {
        const bannedType = rule[0];
        if (!bannedType) {
            break;
        }

        bannedTypes[bannedType] = rule[1]
            ? {
                  message: rule[1],
              }
            : null;
    }

    const ruleArguments =
        Object.keys(bannedTypes).length === 0 ? undefined : [{ types: bannedTypes }];

    return {
        rules: [
            {
                ruleName: "@typescript-eslint/ban-types",
                ...{ ruleArguments },
            },
        ],
    };
};
