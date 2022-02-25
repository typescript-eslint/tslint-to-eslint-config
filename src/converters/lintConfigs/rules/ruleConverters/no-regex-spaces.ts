import { RuleConverter } from "../ruleConverter.js";

export const convertNoRegexSpaces: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-regex-spaces",
            },
        ],
    };
};
