import { RuleConverter } from "../ruleConverter.js";

export const convertNoCollapsibleIf: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-collapsible-if",
            },
        ],
        plugins: ["sonarjs"],
    };
};
