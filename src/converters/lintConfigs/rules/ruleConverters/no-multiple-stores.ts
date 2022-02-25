import { RuleConverter } from "../ruleConverter.js";

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
