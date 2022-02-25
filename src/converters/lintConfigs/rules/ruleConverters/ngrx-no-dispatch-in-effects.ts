import { RuleConverter } from "../ruleConverter.js";

export const convertNgrxNoDispatchInEffects: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-dispatch-in-effects",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
