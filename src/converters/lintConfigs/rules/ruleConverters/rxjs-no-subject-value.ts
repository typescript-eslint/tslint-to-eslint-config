import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoSubjectValue: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-subject-value",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
