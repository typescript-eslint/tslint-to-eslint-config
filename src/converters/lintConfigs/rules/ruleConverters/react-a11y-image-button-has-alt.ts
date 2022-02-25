import { RuleConverter } from "../ruleConverter.js";

export const convertReactA11yImageButtonHasAlt: RuleConverter = () => {
    return {
        notices: ["jsx-a11y/alt-text covers more cases than react-a11y-image-button-has-alt"],
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/alt-text",
            },
        ],
    };
};
