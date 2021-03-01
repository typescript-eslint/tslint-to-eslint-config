import { RuleConverter } from "../../ruleConverter";

export const convertTemplateClickEventsHaveKeyEvents: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/click-events-have-key-events",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
