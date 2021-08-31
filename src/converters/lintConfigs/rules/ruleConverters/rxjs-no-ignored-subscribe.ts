import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoIgnoredSubscribe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-subscribe",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
