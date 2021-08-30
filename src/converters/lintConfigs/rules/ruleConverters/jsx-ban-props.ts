import { RuleConverter } from "../ruleConverter";

export const convertJsxBanProps: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments.map((ruleArgument) => ({
                        forbid:
                            ruleArgument.length === 1
                                ? ruleArgument[0]
                                : {
                                      message: ruleArgument[1],
                                      propName: ruleArgument[0],
                                  },
                    })),
                }),
                ruleName: "react/forbid-component-props",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
