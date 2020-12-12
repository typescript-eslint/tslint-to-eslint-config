import { RuleConverter } from "../../ruleConverter";

export const convertJsxSpaceBeforeTrailingSlash: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [
                    {
                        beforeSelfClosing: "always",
                    },
                ],
                ruleName: "react/jsx-tag-spacing",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
