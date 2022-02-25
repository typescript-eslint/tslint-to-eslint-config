import { RuleConverter } from "../ruleConverter.js";

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
