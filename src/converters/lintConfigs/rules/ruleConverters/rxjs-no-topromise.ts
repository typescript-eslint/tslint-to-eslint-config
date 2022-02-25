import { RuleConverter } from "../ruleConverter.js";

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
