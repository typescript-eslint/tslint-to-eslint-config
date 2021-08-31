import { RuleConverter } from "../ruleConverter";

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
