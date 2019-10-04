import { RuleConverter } from "../converter";

export const convertNoUnusedExpression: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 &&
                    tslintRule.ruleArguments.includes("allow-tagged-template") && {
                        ruleArguments: [{ allowTaggedTemplates: true }],
                    }),
                ruleName: "no-unused-expressions",
            },
        ],
    };
};
