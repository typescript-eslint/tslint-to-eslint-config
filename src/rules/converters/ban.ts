import { RuleConverter } from "../converter";

type BanRule = {
    object?: string;
    property?: string;
    message?: string;
};

export const convertBan: RuleConverter = tslintRule => {
    let bannedObjMethod: BanRule[] = [];

    for (const rule of tslintRule.ruleArguments) {
        switch (rule.constructor.name) {
            case "String":
                bannedObjMethod.push({
                    property: rule,
                });
                break;
            case "Array":
                if (rule.length == 1) {
                    bannedObjMethod.push({
                        property: rule[0],
                    });
                } else {
                    bannedObjMethod.push({
                        object: rule[0],
                        property: rule[1],
                        ...{ message: rule[2] ? rule[2] : undefined },
                    });
                }
                break;
            case "Object":
                if (Array.isArray(rule.name)) {
                    if (rule.name.length == 2) {
                        // TODO: Fix iteration if multiple properties.
                        bannedObjMethod.push({
                            ...{ object: rule.name[0] !== "*" ? rule.name[0] : undefined },
                            property: rule.name[1],
                            ...{ message: rule.message ? rule.message : undefined },
                        });
                    } else {
                        // Don't know how to deal with nested functions.
                    }
                } else {
                    bannedObjMethod.push({
                        property: rule.name,
                        ...{ message: rule.message ? rule.message : undefined },
                    });
                }
                break;
            default:
                break;
        }
    }

    const ruleArguments =
        tslintRule.ruleArguments.length === 0 ? undefined : [2, ...bannedObjMethod];

    return {
        rules: [
            {
                ruleName: "no-restricted-properties",
                ...{ ruleArguments },
            },
        ],
    };
};
