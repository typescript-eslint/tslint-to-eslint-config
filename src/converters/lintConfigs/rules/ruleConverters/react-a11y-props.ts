import { RuleConverter } from "../ruleConverter";

export const convertReactA11yProps: RuleConverter = () => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/aria-props",
            },
        ],
    };
};
