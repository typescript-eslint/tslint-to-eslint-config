import { RuleConverter } from "../ruleConverter";

export const convertJsxSpaceBeforeTrailingSlash: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [
                    {
                        afterOpening: "allow",
                        closingSlash: "allow",
                    },
                ],
                ruleName: "react/jsx-tag-spacing",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
