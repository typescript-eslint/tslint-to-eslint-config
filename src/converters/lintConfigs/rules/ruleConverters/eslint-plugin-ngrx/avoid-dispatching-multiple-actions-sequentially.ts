import { RuleConverter } from "../../ruleConverter";

export const convertAvoidDispatchingMultipleActionsSequentially: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/avoid-dispatching-multiple-actions-sequentially",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
