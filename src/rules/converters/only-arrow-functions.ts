import { RuleConverter } from "../converter";

export const convertOnlyArrowFunctions: RuleConverter = (tslintRule) => {
    const notices: string[] = [];

    if (tslintRule.ruleArguments.includes("allow-declarations")) {
        notices.push("ESLint does not support allowing standalone function declarations.");
    }

    if (tslintRule.ruleArguments.includes("allow-named-functions")) {
        notices.push(
            "ESLint does not support allowing named functions defined with the function keyword.",
        );
    }

    return {
        rules: [
            {
                ...(notices.length !== 0 && { notices }),
                ruleName: "prefer-arrow/prefer-arrow-functions",
            },
        ],
        plugins: ["eslint-plugin-prefer-arrow"],
    };
};
