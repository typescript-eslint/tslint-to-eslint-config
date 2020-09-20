import { RuleConverter } from "../ruleConverter";

export const convertNoInferrableTypes: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-inferrable-types",
                ruleArguments: tslintRule.ruleArguments.length
                    ? tslintRule.ruleArguments.reduce(
                          (acc: any, arg: string) => {
                              switch (arg) {
                                  case "ignore-params":
                                      acc[0].ignoreParameters = true;
                                      return acc;
                                  case "ignore-properties":
                                      acc[0].ignoreProperties = true;
                                      return acc;
                              }
                          },
                          [{}],
                      )
                    : undefined,
            },
        ],
    };
};
