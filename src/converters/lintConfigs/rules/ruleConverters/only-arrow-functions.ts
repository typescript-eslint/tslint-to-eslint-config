import { RuleConverter } from "../ruleConverter";

export const convertOnlyArrowFunctions: RuleConverter = (tslintRule) => {
    const notices: string[] = [];

    if (tslintRule.ruleArguments.includes("allow-named-functions")) {
        notices.push(
            "ESLint (eslint-plugin-prefer-arrow plugin) does not support allowing named functions defined with the function keyword.",
        );
    }

    return {
        rules: [
            {
                ...(notices.length !== 0 && { notices }),
                ruleArguments: [
                    {
                        ...(tslintRule.ruleArguments.includes("allow-declarations") && {
                            allowStandaloneDeclarations: true,
                        }),
                    },
                ],
                ruleName: "prefer-arrow/prefer-arrow-functions",
            },
        ],
        plugins: ["eslint-plugin-prefer-arrow"],
    };
};
