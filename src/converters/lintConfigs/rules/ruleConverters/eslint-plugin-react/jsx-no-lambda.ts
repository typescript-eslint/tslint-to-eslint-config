import { RuleConverter } from "../../ruleConverter";

export const convertJsxNoLambda: RuleConverter = () => {
    return {
        rules: [
            {
                notices: ["ESLint rule 'jsx-no-bind' also checks for Function.bind"],
                ruleName: "react/jsx-no-bind",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
