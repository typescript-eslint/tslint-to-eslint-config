import { RuleConverter } from "../converter";

export const convertBanTypes: RuleConverter = (tslintRule) => {
    type ConvertBanTypeArgument = {
        message: string;
    };

    const bannedTypes: Record<string, ConvertBanTypeArgument | null> = {};

    for (const rule of tslintRule.ruleArguments) {
        if (!Array.isArray(rule)) {
            break;
        }

        const [bannedType, message] = rule;
        if (!bannedType) {
            break;
        }

        bannedTypes[bannedType] = message ? { message } : null;
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
