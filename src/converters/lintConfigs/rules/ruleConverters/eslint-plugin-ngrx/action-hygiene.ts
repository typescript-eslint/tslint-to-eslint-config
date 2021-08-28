import { RuleConverter } from "../../ruleConverter";

export const convertActionHygiene: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/good-action-hygiene",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
