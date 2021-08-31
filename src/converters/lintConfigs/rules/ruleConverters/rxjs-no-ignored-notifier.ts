import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoIgnoredNotifier: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-notifier",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
