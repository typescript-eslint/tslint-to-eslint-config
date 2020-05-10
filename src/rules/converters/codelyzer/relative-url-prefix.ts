import { RuleConverter } from "../../converter";

export const convertRelativeUrlPrefix: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/relative-url-prefix",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
