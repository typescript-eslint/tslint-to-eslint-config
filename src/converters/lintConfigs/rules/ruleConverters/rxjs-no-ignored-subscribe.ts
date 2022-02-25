import { RuleConverter } from "../ruleConverter.js";

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
