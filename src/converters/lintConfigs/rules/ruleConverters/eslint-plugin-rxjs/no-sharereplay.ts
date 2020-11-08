import { RuleConverter } from "../../ruleConverter";

export const convertNoShareReplay: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "rxjs/no-sharereplay",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
