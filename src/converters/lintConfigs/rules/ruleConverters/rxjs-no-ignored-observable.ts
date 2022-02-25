import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoIgnoredObservable: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-observable",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
