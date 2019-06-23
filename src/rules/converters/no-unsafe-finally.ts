import { RuleConverter } from "../converter";

export const convertNoUnsafeFinally: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-unsafe-finally",
            },
        ],
    };
};
