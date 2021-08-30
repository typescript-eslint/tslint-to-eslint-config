import { RuleConverter } from "../../ruleConverter";

export const convertNoEffectsInProviders: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-effects-in-providers",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
