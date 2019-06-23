import { RuleConverter } from "../converter";

export const convertNoControlRegex: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-control-regex",
            },
        ],
    };
};
