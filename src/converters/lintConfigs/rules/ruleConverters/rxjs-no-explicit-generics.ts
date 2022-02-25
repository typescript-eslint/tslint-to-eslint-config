import { RuleConverter } from "../ruleConverter.js";

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
