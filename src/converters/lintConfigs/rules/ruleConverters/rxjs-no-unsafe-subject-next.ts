import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoUnsafeSubjectNext: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-unsafe-subject-next",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
