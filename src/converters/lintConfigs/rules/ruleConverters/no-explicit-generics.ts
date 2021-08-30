import { RuleConverter } from "../ruleConverter";

export const convertNoExplicitGenerics: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-explicit-generics",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
