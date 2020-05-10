import { RuleConverter } from "../../converter";

export const convertUseLifecycleInterface: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/use-lifecycle-interface",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
