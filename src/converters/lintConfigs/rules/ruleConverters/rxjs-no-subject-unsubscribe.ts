import { RuleConverter } from "../ruleConverter.js";

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
