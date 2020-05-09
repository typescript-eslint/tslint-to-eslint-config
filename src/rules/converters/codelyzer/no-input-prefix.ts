import { RuleConverter } from "../../converter";

export const convertNoInputPrefix: RuleConverter = (tslintRule) => {
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
                ruleName: "@angular-eslint/no-input-prefix",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
