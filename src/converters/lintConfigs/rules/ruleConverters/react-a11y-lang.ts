import { RuleConverter } from "../ruleConverter";

export const convertReactA11yLang: RuleConverter = () => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/lang",
            },
        ],
    };
};
