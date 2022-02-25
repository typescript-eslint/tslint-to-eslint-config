import { RuleConverter } from "../ruleConverter.js";

export const convertCognitiveComplexity: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "sonarjs/cognitive-complexity",
            },
        ],
        plugins: ["sonarjs"],
    };
};
