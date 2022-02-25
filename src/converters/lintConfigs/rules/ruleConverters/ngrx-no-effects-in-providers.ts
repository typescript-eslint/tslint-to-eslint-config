import { RuleConverter } from "../ruleConverter.js";

export const convertNgrxNoEffectsInProviders: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-effects-in-providers",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
