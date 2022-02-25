import { RuleConverter } from "../ruleConverter.js";

export const convertParametersMaxNumber: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ruleArguments: [{ max: tslintRule.ruleArguments[0] ?? 7 }],
                ruleName: "max-params",
            },
        ],
    };
};
