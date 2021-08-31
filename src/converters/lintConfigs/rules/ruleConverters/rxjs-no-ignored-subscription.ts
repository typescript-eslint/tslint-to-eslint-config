import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoIgnoredSubscription: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-subscription",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
