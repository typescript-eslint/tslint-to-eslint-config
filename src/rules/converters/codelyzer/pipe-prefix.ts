import { RuleConverter } from "../../converter";

export const convertPipePrefix: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            prefixes: tslintRule.ruleArguments,
                        },
                    ],
                }),
                ruleName: "@angular-eslint/pipe-prefix",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
