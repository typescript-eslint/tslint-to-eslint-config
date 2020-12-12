import { RuleConverter } from "../../ruleConverter";

export const convertJsxBanProps: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments.map((ruleArgument) => ({
                        ...(ruleArgument.length === 2 && { message: ruleArgument[1] }),
                        propName: ruleArgument[0],
                    })),
                }),
                ruleName: "react/forbid-component-props",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
