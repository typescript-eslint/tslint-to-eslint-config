import { RuleConverter } from "../ruleConverter.js";

export const convertJsxCurlySpacing: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            when: tslintRule.ruleArguments[0],
                        },
                    ],
                }),
                ruleName: "react/jsx-curly-spacing",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
