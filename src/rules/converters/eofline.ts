import { RuleConverter } from "../converter";

export const convertEofline: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "eol-last",
            },
        ],
    };
};
