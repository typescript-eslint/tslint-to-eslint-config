import { RuleConverter } from "../ruleConverter.js";

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
