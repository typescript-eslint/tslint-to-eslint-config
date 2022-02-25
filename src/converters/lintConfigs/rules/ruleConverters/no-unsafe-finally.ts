import { RuleConverter } from "../ruleConverter.js";

export const convertNoUnsafeFinally: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-unsafe-finally",
            },
        ],
    };
};
