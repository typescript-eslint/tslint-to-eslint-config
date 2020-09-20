import { RuleConverter } from "../ruleConverter";

export const convertNoReturnAwait: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-return-await",
            },
        ],
    };
};
