import { RuleConverter } from "../../ruleConverter";

export const convertNoIgnoredNotifier: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-notifier",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
