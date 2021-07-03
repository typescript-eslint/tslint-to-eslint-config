import { RuleConverter } from "../ruleConverter";

export const convertReactA11yImageButtonHasAlt: RuleConverter = () => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/alt-text",
            },
        ],
    };
};
