import { RuleConverter } from "../ruleConverter";

export const convertReactA11yImgHasAlt: RuleConverter = (tslintRule) => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            elements: tslintRule.ruleArguments,
                        },
                    ],
                }),
                ruleName: "jsx-a11y/alt-text",
            },
        ],
    };
};
