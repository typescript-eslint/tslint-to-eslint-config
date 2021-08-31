import { RuleConverter } from "../ruleConverter";

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
