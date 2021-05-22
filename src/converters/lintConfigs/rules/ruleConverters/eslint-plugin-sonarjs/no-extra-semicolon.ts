import { RuleConverter } from "../../ruleConverter";

export const convertNoExtraSemicolon: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-semi",
            },
        ],
    };
};
