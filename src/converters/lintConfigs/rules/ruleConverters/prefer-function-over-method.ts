import { RuleConverter } from "../ruleConverter.js";

export const convertPreferFunctionOverMethod: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    notices: [
                        `${tslintRule.ruleArguments.join(
                            " and ",
                        )} methods will no longer be ignored.`,
                    ],
                }),
                ruleName: "class-methods-use-this",
            },
        ],
    };
};
