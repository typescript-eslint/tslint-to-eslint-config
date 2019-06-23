import { RuleConverter } from "../converter";

export const convertNoRegexSpaces: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-regex-spaces",
            },
        ],
    };
};
