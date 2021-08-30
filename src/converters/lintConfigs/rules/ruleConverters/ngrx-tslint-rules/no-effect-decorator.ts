import { RuleConverter } from "../../ruleConverter";

export const convertNoEffectDecorator: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-effect-decorator",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
