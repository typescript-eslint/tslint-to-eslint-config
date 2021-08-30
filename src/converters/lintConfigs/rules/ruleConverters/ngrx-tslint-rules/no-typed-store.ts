import { RuleConverter } from "../../ruleConverter";

export const convertNoTypedStore: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-typed-global-store",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
