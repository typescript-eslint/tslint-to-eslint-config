import { RuleConverter } from "../ruleConverter";

export const convertNgrxActionHygiene: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/good-action-hygiene",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
