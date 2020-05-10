import { RuleConverter } from "../../converter";

export const convertTemplateUseTrackByFunction: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template-use-track-by-function",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
