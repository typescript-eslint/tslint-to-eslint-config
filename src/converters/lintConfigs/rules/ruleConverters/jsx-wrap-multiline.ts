import { RuleConverter } from "../ruleConverter.js";

export const convertJsxWrapMultiline: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/jsx-wrap-multilines",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
