import { RuleConverter } from "../ruleConverter";

export const convertMochaAvoidOnly: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "jest/no-focused-tests",
            },
        ],
    };
};
