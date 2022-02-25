import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoNestedSubscribe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-nested-subscribe",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
