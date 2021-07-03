import { RuleConverter } from "../ruleConverter";

export const convertReactA11yAccessibleHeadings: RuleConverter = (tslintRule) => {
    return {
        ...(tslintRule.ruleArguments.length === 1 && {
            notices: ["jsx-a11y/heading-has-content rule does not support maxHeadingLength"],
        }),
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/heading-has-content",
            },
        ],
    };
};
