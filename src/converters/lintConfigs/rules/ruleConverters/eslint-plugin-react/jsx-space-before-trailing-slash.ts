import { RuleConverter } from "../../ruleConverter";

export const convertJsxSpaceBeforeTrailingSlash: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/jsx-space-before-closing",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
