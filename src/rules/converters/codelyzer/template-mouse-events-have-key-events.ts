import { RuleConverter } from "../../converter";

export const convertTemplateMouseEventsHaveKeyEvents: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template-mouse-events-have-key-events",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
