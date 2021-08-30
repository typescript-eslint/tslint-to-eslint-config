import { RuleConverter } from "../ruleConverter";

export const convertPreferAngularComposition: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "prefer-composition",
            },
        ],
        plugins: ["rxjs-angular"],
    };
};
