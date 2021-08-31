import { RuleConverter } from "../ruleConverter";

export const convertNgrxSelectorForSelect: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/use-selector-in-select",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
