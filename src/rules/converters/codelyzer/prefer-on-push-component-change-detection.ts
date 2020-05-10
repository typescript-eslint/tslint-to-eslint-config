import { RuleConverter } from "../../converter";

export const convertPreferOnPushComponentChangeDetection: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/prefer-on-push-component-change-detection",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
