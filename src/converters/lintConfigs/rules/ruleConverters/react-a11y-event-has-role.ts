import { RuleConverter } from "../ruleConverter";

export const convertReactA11yEventHasRole: RuleConverter = () => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/no-static-element-interactions",
            },
        ],
    };
};
