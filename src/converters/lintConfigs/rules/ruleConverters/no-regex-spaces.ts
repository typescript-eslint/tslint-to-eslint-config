import { RuleConverter } from "../ruleConverter";

export const convertNoRegexSpaces: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-regex-spaces",
            },
        ],
    };
};
