import { RuleConverter } from "../../ruleConverter";

export const convertNoDispatchInEffects: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-dispatch-in-effects",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
