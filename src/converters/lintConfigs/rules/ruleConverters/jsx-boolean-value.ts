import { RuleConverter } from "../ruleConverter";

export const convertJsxBooleanValue: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),
                ruleName: "react/jsx-boolean-value",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
