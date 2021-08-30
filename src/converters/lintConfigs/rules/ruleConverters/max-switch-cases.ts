import { RuleConverter } from "../ruleConverter";

export const convertMaxSwitchCases: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "sonarjs/max-switch-cases",
            },
        ],
        plugins: ["sonarjs"],
    };
};
