import { RuleConverter } from "../../converter";

export const convertContextualLifecycle: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/contextual-lifecycle",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
