import { RuleConverter } from "../ruleConverter.js";

export const convertReactA11yAnchors: RuleConverter = (tslintRule) => {
    return {
        ...(tslintRule.ruleArguments.length > 0 && {
            notices: Object.keys(tslintRule.ruleArguments[0] as Record<string, unknown>).map(
                (key) => `jsx-a11y/anchor-is-valid does not support the '${key}' option.`,
            ),
        }),
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/anchor-is-valid",
            },
        ],
    };
};
