import { RuleConverter } from "../../ruleConverter";

export const convertNoCollapsibleIf: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-collapsible-if",
            },
        ],
        plugins: ["eslint-plugin-sonarjs"],
    };
};
