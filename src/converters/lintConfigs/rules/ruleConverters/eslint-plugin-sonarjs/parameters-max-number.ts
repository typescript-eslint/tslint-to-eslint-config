import { RuleConverter } from "../../ruleConverter";

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
