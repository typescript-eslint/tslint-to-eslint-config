import { RuleConverter } from "../../converter";

export const convertNoAttributeDecorator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-attribute-decorator",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
