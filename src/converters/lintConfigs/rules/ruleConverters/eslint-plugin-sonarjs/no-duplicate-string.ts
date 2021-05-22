import { RuleConverter } from "../../ruleConverter";

export const convertNoDuplicateString: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "sonarjs/no-duplicate-string",
            },
        ],
        plugins: ["eslint-plugin-sonarjs"],
    };
};
