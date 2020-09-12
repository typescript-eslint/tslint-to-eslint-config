import { RuleConverter } from "../ruleConverter";

export const convertNoUnnecessarySemicolons: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-semi",
            },
        ],
    };
};
