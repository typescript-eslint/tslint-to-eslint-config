import { RuleConverter } from "../ruleConverter";

export const convertNgrxNoMultipleActionsInEffects: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-multiple-actions-in-effects",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
