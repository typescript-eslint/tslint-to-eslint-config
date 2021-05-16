import { RuleConverter } from "../../ruleConverter";

export const convertNoExposedSubjects: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "rxjs/no-exposed-subjects",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
