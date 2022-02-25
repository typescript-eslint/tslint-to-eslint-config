import { RuleConverter } from "../ruleConverter.js";

export const convertNoBigFunction: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ruleArguments: [{ max: tslintRule.ruleArguments[0] ?? 200 }],
                ruleName: "max-lines-per-function",
            },
        ],
    };
};
