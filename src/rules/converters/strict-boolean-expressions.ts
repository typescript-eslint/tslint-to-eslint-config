import { RuleConverter } from "../converter";

export const ForbiddenOtherNonBooleanTypes =
    "String, number, enum and mixed union types are forbidden.";

export const convertStrictBooleanExpressions: RuleConverter = tslintRule => {
    const notices: string[] = [];
    const ruleArguments: { [key: string]: boolean } = {};

    if (tslintRule.ruleArguments.length >= 2 || tslintRule.ruleArguments[0] === true) {
        notices.push(ForbiddenOtherNonBooleanTypes);
        tslintRule.ruleArguments.forEach(ruleArgument => {
            switch (ruleArgument) {
                case "allow-undefined-union":
                case "allow-boolean-or-undefined":
                case "allow-null-union":
                    ruleArguments["allowNullable"] = true;
                    break;
                case "ignore-rhs":
                    ruleArguments["ignoreRhs"] = true;
                    break;
                default:
                    break;
            }
        });
    }

    return {
        rules: [
            {
                ruleName: "@typescript-eslint/strict-boolean-expressions",
                ruleArguments: Object.keys(ruleArguments).length !== 0 ? [ruleArguments] : [],
                notices,
            },
        ],
    };
};
