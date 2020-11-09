import { RuleConverter } from "../../ruleConverter";

export const convertNoSubjectUnubscribe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-subject-unsubscribe",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
