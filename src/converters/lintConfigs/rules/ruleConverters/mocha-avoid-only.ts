import { RuleConverter } from "../ruleConverter";

export const convertMochaAvoidOnly: RuleConverter = () => {
    return {
        plugins: ["eslint-plugin-jest"],
        rules: [
            {
                ruleName: "jest/no-focused-tests",
            },
        ],
    };
};
