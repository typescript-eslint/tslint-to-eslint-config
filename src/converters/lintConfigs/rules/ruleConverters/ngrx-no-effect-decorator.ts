import { RuleConverter } from "../ruleConverter";

export const convertNgrxNoEffectDecorator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-effect-decorator",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
