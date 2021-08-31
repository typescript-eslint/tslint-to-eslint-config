import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoExplicitGenerics: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-explicit-generics",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
