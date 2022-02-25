import { RuleConverter } from "../ruleConverter.js";

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
