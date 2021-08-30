import { RuleConverter } from "../../ruleConverter";

export const convertNoUnsafeTakeuntil: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "rxjs/no-unsafe-takeuntil",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
