import { RuleConverter } from "../ruleConverter";

export const convertUnderscoreConsistentInvocation: RuleConverter = (tslintRule) => {
    return {
        plugins: ["eslint-plugin-lodash"],
        rules: [
            {
                ruleArguments: tslintRule.ruleArguments.length === 0 || tslintRule.ruleArguments[0] === 'instance'
                    ? ['never']
                    : ['always', 0],
                ruleName: "lodash/chaining",
            },
        ],
    };
};
