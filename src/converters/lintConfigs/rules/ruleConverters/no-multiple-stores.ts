import { RuleConverter } from "../ruleConverter";

export const convertNoMultipleStores: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-multiple-global-stores",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
