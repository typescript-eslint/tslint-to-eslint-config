import { RuleConverter } from "../converter";

export const convertIncrementDecrement: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length === 0 && {
                    notices: ["++ and -- operators will now only be allowed in for loops."],
                    ruleArguments: ["allowForLoopAfterthoughts"],
                }),
                ruleName: "no-plusplus",
            },
        ],
    };
};
