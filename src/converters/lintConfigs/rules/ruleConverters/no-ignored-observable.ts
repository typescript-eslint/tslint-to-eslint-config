import { RuleConverter } from "../ruleConverter";

export const convertNoIgnoredObservable: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-observable",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
