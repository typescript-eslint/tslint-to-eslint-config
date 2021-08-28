import { RuleConverter } from "../../ruleConverter";

export const convertEffectCreatorAndDecorator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/effect-decorator-and-creator",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
