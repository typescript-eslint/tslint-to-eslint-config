import { RuleConverter } from "../converter";

export const convertNoNullKeyword: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-null/no-null",
            },
        ],
        plugins: ["no-null"],
    };
};
