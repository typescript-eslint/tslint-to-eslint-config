import { RuleConverter } from "../ruleConverter.js";

export const convertTemplateUseTrackByFunction: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/use-track-by-function",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
