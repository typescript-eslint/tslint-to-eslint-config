import { RuleConverter } from "../ruleConverter";

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
