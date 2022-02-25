import { RuleConverter } from "../ruleConverter.js";

export const convertMaxFileLineCount: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "max-lines",
            },
        ],
    };
};
