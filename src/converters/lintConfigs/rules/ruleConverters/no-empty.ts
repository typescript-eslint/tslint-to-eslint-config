import { isDefined } from "../../../../utils";
import { RuleConverter, RuleConverterOptions } from "../ruleConverter";

export const convertNoEmpty: RuleConverter = (tslintRule) => {
    return {
        rules: [convertNoEmptyRule(tslintRule), convertNoEmptyFunctionRule(tslintRule)].filter(
            isDefined,
        ),
    };
};

const convertNoEmptyRule = (tslintRule: RuleConverterOptions) => {
    return {
        ...(tslintRule.ruleArguments.includes("allow-empty-catch") && {
            ruleArguments: [
                {
                    allowEmptyCatch: true,
                },
            ],
        }),
        ruleName: "no-empty",
    };
};

const convertNoEmptyFunctionRule = (tslintRule: RuleConverterOptions) => {
    return tslintRule.ruleArguments.includes("allow-empty-functions")
        ? undefined
        : {
              ruleName: "@typescript-eslint/no-empty-function",
          };
};
