import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoToPromise: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-topromise",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
