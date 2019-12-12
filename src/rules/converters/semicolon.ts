import { RuleConverter } from "../converter";

export const convertSemicolon: RuleConverter = tslintRule => {
    const getMultilineDelimiter = (strategy: "always" | "never") => {
        return strategy === "always" ? "semi" : "none";
    };

    const ignoreInterfaces = tslintRule.ruleArguments.includes("ignore-interfaces");
    const strictBoundClassMethods = tslintRule.ruleArguments.includes("strict-bound-class-methods");

    return {
        ...(strictBoundClassMethods && {
            notices: [
                "Option `strict-bound-class-methods` was found, there is no exact equivalent yet supported.",
            ],
        }),
        rules: [
            {
                ruleArguments: [tslintRule.ruleArguments[0]],
                ruleName: "@typescript-eslint/semi",
            },
            ...(ignoreInterfaces
                ? []
                : [
                      {
                          ruleArguments: [
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
                          ruleName: "@typescript-eslint/member-delimiter-style",
                      },
                  ]),
        ],
    };
};
