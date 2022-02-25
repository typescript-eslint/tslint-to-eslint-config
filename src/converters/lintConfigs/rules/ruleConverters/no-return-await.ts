import { RuleConverter } from "../ruleConverter.js";

export const convertNoReturnAwait: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-return-await",
            },
        ],
    };
};
