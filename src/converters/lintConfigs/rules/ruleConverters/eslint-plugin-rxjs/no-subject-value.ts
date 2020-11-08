import { RuleConverter } from "../../ruleConverter";

export const convertNoSubjectValue: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-subject-value",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
