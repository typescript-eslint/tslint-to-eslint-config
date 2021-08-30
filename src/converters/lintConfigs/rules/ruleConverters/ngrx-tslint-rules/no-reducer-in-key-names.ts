import { RuleConverter } from "../../ruleConverter";

export const convertNoReducerInKeyNames: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/no-reducer-in-key-names",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
