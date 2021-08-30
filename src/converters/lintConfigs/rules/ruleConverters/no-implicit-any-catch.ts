import { RuleConverter } from "../ruleConverter";

export const convertNoImplicitAnyCatch: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "rxjs/no-implicit-any-catch",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
