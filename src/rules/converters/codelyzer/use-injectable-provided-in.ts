import { RuleConverter } from "../../converter";

export const convertUseInjectableProvidedIn: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/use-injectable-provided-in",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
