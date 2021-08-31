import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoSubjectUnubscribe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-subject-unsubscribe",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
