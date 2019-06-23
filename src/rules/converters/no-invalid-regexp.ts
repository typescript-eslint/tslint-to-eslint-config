import { RuleConverter } from "../converter";

export const convertNoInvalidRegexp: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-invalid-regexp",
            },
        ],
    };
};
