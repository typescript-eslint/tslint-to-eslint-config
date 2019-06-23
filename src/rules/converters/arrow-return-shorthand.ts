import { RuleConverter } from "../converter";

export const convertArrowReturnShorthand: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 &&
                    tslintRule.ruleArguments[0] === "multiline" && {
                        ruleArguments: ["always"],
                    }),
                ruleName: "arrow-body-style",
            },
        ],
    };
};
