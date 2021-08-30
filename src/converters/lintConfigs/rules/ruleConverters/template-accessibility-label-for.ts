import { RuleConverter } from "../ruleConverter";

export const convertTemplateAccessibilityLabelFor: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            ...(tslintRule.ruleArguments[0]?.controlComponents && {
                                controlComponents: tslintRule.ruleArguments[0]?.controlComponents,
                            }),
                            ...(tslintRule.ruleArguments[0]?.labelComponents && {
                                labelComponents: tslintRule.ruleArguments[0]?.labelComponents.map(
                                    (selector: string) => {
                                        return {
                                            inputs:
                                                tslintRule.ruleArguments[0]?.labelAttributes || [],
                                            selector,
                                        };
                                    },
                                ),
                            }),
                        },
                    ],
                }),
                ruleName: "@angular-eslint/template/accessibility-label-has-associated-control",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
