import { RuleConverter } from "../ruleConverter";

export const convertNoIgnoredSubscription: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-subscription",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
