import { RuleConverter } from "../converter";

// for reference, see here
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
export const semicolon: RuleConverter = tslintRule => {
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
                          ruleName: "@typescript-estlint/member-delimiter-style",
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
        notices: [
            "You must disable the base rule (semi) as it can report incorrect errors.",
            ...(strictBoundClassMethods
                ? [
                      "Option `strict-bound-class-methods` was found, there is no exact equivalent yet supported.",
                  ]
                : []),
        ],
    };
};
