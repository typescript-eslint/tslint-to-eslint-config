import { RuleConverter } from "../converter";

export const convertNoConsole: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [{ allow: tslintRule.ruleArguments }],
                }),
                ruleName: "no-console",
            },
        ],
    };
};
