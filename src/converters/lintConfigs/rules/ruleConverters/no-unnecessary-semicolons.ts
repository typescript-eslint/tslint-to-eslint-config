import { RuleConverter } from "../ruleConverter.js";

export const convertNoUnnecessarySemicolons: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-semi",
            },
        ],
    };
};
