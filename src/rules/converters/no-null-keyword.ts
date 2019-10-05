import { RuleConverter } from "../converter";

export const convertNoNullKeyword: RuleConverter = () => {
    return {
        notices: ["Null types will no longer be handled."],
        rules: [
            {
                ruleName: "no-null/no-null",
            },
        ],
        plugins: ["no-null"],
    };
};
