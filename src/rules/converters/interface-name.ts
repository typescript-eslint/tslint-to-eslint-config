import { RuleConverter } from "../converter";

export const convertInterfaceName: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/naming-convention",
                ...(tslintRule.ruleArguments.length !== 0 && {
                    rules: [
                        {
                            selector: "interface",
                            format: ["PascalCase"],
                            custom: {
                                regex: "^I[A-Z]",
                                match:
                                    tslintRule.ruleArguments[0] === "always-prefix" ? true : false,
                            },
                        },
                    ],
                }),
            },
        ],
    };
};
