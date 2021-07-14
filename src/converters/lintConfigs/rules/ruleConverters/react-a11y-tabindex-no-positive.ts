import { RuleConverter } from "../ruleConverter";

export const convertReactA11yTabIndexNoPositive: RuleConverter = () => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/tabindex-no-positive",
            },
        ],
    };
};
