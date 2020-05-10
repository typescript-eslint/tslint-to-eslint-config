import { RuleConverter } from "../../converter";

export const convertImportDestructuringSpacing: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/import-destructuring-spacing",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
