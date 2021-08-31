import { RuleConverter } from "../ruleConverter";

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
