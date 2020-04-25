import { RuleConverter } from "../converter";

export const ForbiddenOtherNonBooleanTypes =
    "String, number, enum, and mixed union types are now forbidden.";

export const convertStrictBooleanExpressions: RuleConverter = (tslintRule) => {
    const ruleArguments: Record<string, boolean> = {};
    let notices: string[] | undefined;

    if (tslintRule.ruleArguments.length >= 2 || tslintRule.ruleArguments[0] === true) {
        notices = [ForbiddenOtherNonBooleanTypes];

        for (const ruleArgument of tslintRule.ruleArguments) {
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
        }
    }

    return {
        rules: [
            {
                ...{ notices },
                ...(Object.keys(ruleArguments).length !== 0 && { ruleArguments: [ruleArguments] }),
                ruleName: "@typescript-eslint/strict-boolean-expressions",
            },
        ],
    };
};
