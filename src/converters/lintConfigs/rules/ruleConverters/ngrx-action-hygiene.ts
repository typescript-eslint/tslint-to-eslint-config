import { RuleConverter } from "../ruleConverter.js";

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
