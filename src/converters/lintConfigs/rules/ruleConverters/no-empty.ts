import { ConvertedRuleChanges, RuleConverter, RuleConverterOptions } from "../ruleConverter";

export const convertNoEmpty: RuleConverter = (tslintRule) => {
    return {
        rules: [convertNoEmptyRule(tslintRule), ...convertNoEmptyFunctionRule(tslintRule)],
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

const convertNoEmptyFunctionRule = (tslintRule: RuleConverterOptions): ConvertedRuleChanges[] => {
    return tslintRule.ruleArguments.includes("allow-empty-functions")
        ? []
        : [
              {
                  ruleName: "no-empty-function",
                  ruleSeverity: "off",
              },
              {
                  ruleName: "@typescript-eslint/no-empty-function",
              },
          ];
};
