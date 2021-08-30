import { RuleConverter } from "../ruleConverter";

export const convertNoUnsafeSubjectNext: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-unsafe-subject-next",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
