import { RuleConverter } from "../ruleConverter";

export const convertJsxKey: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/jsx-key",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
