import { RuleConverter } from "../ruleConverter";

export const convertNoUnsafeFinally: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-unsafe-finally",
            },
        ],
    };
};
