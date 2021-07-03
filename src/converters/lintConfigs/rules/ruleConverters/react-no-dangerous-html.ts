import { RuleConverter } from "../ruleConverter";

export const convertReactNoDangerousHtml: RuleConverter = () => {
    return {
        plugins: ['eslint-plugin-react'],
        rules: [
            {
                ruleName: "react/no-danger",
            },
        ],
    };
};
