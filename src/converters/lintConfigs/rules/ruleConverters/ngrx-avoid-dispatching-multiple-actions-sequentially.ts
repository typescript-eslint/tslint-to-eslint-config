import { RuleConverter } from "../ruleConverter.js";

export const convertNgrxAvoidDispatchingMultipleActionsSequentially: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/avoid-dispatching-multiple-actions-sequentially",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
