import { RuleConverter } from "../../ruleConverter";

export const convertUsePipeDecorator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/use-pipe-decorator",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
