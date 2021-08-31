import { RuleConverter } from "../ruleConverter";

export const convertNgrxEffectCreatorAndDecorator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-effect-decorator-and-creator",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
