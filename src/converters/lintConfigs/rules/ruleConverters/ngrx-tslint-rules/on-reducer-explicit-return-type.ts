import { RuleConverter } from "../../ruleConverter";

export const convertOnReducerExplicitReturnType: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/on-function-explicit-return-type",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
