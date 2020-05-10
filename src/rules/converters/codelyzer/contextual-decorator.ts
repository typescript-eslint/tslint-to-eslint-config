import { RuleConverter } from "../../converter";

export const convertContextualDecorator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/contextual-decorator",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
