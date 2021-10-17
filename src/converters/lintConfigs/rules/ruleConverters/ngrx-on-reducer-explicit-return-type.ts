import { RuleConverter } from "../ruleConverter";

export const convertNgrxOnReducerExplicitReturnType: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/on-function-explicit-return-type",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
