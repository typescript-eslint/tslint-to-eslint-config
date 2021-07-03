import { RuleConverter } from "../ruleConverter";

export const convertReactTsxCurlySpacing: RuleConverter = (tslintRule) => {
    return {
        plugins: ["eslint-plugin-react"],
        rules: [
            {
                ruleArguments: [
                    {
                        ...(tslintRule.ruleArguments.length > 1 && tslintRule.ruleArguments[1]),
                        'when': tslintRule.ruleArguments[0],
                    }
                ],
                ruleName: "react/jsx-curly-spacing",
            },
        ],
    };
};
