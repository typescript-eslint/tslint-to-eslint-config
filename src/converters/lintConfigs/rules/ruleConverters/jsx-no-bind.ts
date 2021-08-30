import { RuleConverter } from "../ruleConverter";

export const convertJsxNoBind: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/jsx-no-bind",
                notices: ["ESLint rule 'jsx-no-bind' also checks for arrow functions"],
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
