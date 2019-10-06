import { RuleConverter } from "../converter";

export const convertSemicolon: RuleConverter = tslintRule => {
    const getMultilineDelimiter = (strategy: "always" | "never") => {
        if (strategy === "always") {
            return "semi";
        }
        return "none";
    };

    const ignoreInterfaces = tslintRule.ruleArguments.includes("ignore-interfaces");
    const strictBoundClassMethods = tslintRule.ruleArguments.includes("strict-bound-class-methods");

    return {
        rules: [
            {
                ruleName: "@typescript-eslint/semi",
                ruleArguments: [tslintRule.ruleArguments[0]],
            },
            ...(ignoreInterfaces
                ? []
                : [
                      {
                          ruleName: "@typescript-eslint/member-delimiter-style",
                          ruleArguments: [
                              "error",
                              {
                                  multiline: {
                                      delimiter: getMultilineDelimiter(tslintRule.ruleArguments[0]),
                                      requireLast: true,
                                  },
                                  singleline: {
                                      delimiter: "semi",
                                      requireLast: false,
                                  },
                              },
                          ],
                      },
                  ]),
        ],

        notices: strictBoundClassMethods
            ? [
                  "Option `strict-bound-class-methods` was found, there is no exact equivalent yet supported.",
              ]
            : undefined,
    };
};
