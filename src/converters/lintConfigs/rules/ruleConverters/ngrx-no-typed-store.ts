import { RuleConverter } from "../ruleConverter.js";

export const convertNgrxNoTypedStore: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-typed-global-store",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
