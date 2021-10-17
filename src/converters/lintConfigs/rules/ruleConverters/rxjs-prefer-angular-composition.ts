import { RuleConverter } from "../ruleConverter";

export const convertRxjsPreferAngularComposition: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "prefer-composition",
            },
        ],
        plugins: ["rxjs-angular"],
    };
};
