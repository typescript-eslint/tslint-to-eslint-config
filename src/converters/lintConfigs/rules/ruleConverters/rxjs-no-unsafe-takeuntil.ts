import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoUnsafeTakeUntil: RuleConverter = (tslintRule) => {
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
