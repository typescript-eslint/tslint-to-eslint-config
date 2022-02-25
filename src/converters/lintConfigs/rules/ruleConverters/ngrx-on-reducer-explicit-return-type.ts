import { RuleConverter } from "../ruleConverter.js";

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
