import { RuleConverter } from "../../converter";

export const convertNoPipeImpure: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-pipe-impure",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
