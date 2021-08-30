import { RuleConverter } from "../../ruleConverter";

export const convertSelectorForSelect: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "ngrx/use-selector-in-select",
            },
        ],
        plugins: ["eslint-plugin-ngrx"],
    };
};
