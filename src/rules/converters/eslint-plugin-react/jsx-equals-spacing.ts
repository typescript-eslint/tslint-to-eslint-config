import { RuleConverter } from "../../converter";

export const convertJsxEqualsSpacing: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [tslintRule.ruleArguments[0]],
                }),
                ruleName: "react/jsx-equals-spacing",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
