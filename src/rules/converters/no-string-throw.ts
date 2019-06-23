import { RuleConverter } from "../converter";

export const convertNoStringThrow: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-throw-literal",
            },
        ],
    };
};
